<?php
/**
 * TVDYALEK — order mailer endpoint.
 * Receives a checkout order (name + WhatsApp + plan), and emails a styled
 * "new order" notification to the admins via Zoho SMTP. No client email is
 * collected or sent — the client is contacted on WhatsApp.
 * Drop this + config.php into the htdocs of the api.tvdyalek.store PHP site.
 */

$cfg = @include __DIR__ . '/config.php';
if (!is_array($cfg)) { http_response_code(500); echo '{"ok":false,"error":"no config"}'; exit; }

// ---- CORS ----
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $cfg['allow_origins'], true)) {
  header('Access-Control-Allow-Origin: ' . $origin);
  header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }

// ---- Input ----
$in = json_decode(file_get_contents('php://input'), true) ?: $_POST;
$clean = fn($v) => trim(preg_replace('/[\r\n]+/', ' ', (string)($v ?? '')));
$orderId  = $clean($in['orderId']  ?? '');
$planName = $clean($in['planName'] ?? '');
$price    = $clean($in['price']    ?? '');
$name     = $clean($in['name']     ?? '');
$phone    = $clean($in['phone']    ?? '');

if ($name === '' || $phone === '') { http_response_code(422); echo '{"ok":false,"error":"invalid"}'; exit; }
if ($orderId === '') $orderId = 'TVD-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 5));

$esc  = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$when = (new DateTime('now', new DateTimeZone('Africa/Casablanca')))->format('Y-m-d H:i');

// client's WhatsApp in international form (Morocco default) for the admin button
$waClient = preg_replace('/\D/', '', $phone);
if (strpos($waClient, '00') === 0)      $waClient = substr($waClient, 2);             // 00212... -> 212...
elseif (strpos($waClient, '0') === 0)   $waClient = '212' . substr($waClient, 1);    // 06... -> 2126...

// ---------- Email shell (dark + gold, inline styles for email clients) ----------
function shell(string $inner): string {
  return '<!DOCTYPE html><html dir="rtl" lang="ar"><body style="margin:0;background:#0b0908;font-family:Tahoma,Arial,sans-serif;color:#f5efe2;">'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0b0908;padding:28px 14px;"><tr><td align="center">'
    . '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#181209;border:1px solid rgba(220,168,42,.28);border-radius:16px;overflow:hidden;">'
    . '<tr><td style="padding:22px 28px;border-bottom:1px solid rgba(220,168,42,.22);">'
    . '<span style="font-size:22px;font-weight:bold;letter-spacing:2px;color:#dca82a;">TVDYALEK</span>'
    . '</td></tr><tr><td style="padding:30px 28px;">' . $inner . '</td></tr>'
    . '<tr><td style="padding:18px 28px;border-top:1px solid rgba(220,168,42,.22);color:#b0a48c;font-size:12px;line-height:1.8;">'
    . 'TVDYALEK — تلفازك على طريقتك<br>للدعم: support@tvdyalek.store</td></tr>'
    . '</table></td></tr></table></body></html>';
}
function btn(string $href, string $label, string $bg = '#25D366'): string {
  return '<a href="' . $href . '" style="display:inline-block;background:' . $bg . ';color:#06210f;font-weight:bold;text-decoration:none;padding:14px 30px;border-radius:10px;font-size:16px;">' . $label . '</a>';
}
function row(string $k, string $v): string {
  return '<tr><td style="padding:9px 0;color:#b0a48c;font-size:14px;">' . $k . '</td>'
    . '<td style="padding:9px 0;color:#f5efe2;font-size:14px;font-weight:bold;text-align:left;" dir="ltr">' . $v . '</td></tr>';
}

// ---------- Admin notification ----------
$waClientLink = 'https://wa.me/' . $waClient;
$adminHtml = shell(
  '<h1 style="margin:0 0 6px;font-size:23px;color:#f5d265;">🔔 طلب جديد من الموقع</h1>'
  . '<p style="margin:0 0 18px;color:#d8cfbb;font-size:15px;">وصلك طلب اشتراك جديد عبر tvdyalek.store:</p>'
  . '<table role="presentation" width="100%" style="background:#1f1810;border-radius:12px;padding:6px 18px;margin:0 0 22px;">'
  . row('رقم الطلب', '<span style="color:#f5d265;">' . $esc($orderId) . '</span>')
  . row('الاسم', $esc($name))
  . row('الواتساب', $esc($phone))
  . row('الباقة', $esc($planName))
  . row('السعر', $esc($price) . ' درهم')
  . row('التاريخ', $esc($when))
  . '</table>'
  . '<div style="text-align:center;margin:6px 0;">' . btn($waClientLink, 'تواصل مع العميل عبر واتساب') . '</div>'
);

// ---------- Minimal SMTP (implicit SSL on 465 / STARTTLS on 587) ----------
function smtp_send(array $cfg, array $to, string $subject, string $html): array {
  $transport = ($cfg['port'] == 465 ? 'ssl://' : 'tcp://') . $cfg['host'] . ':' . $cfg['port'];
  $fp = @stream_socket_client($transport, $errno, $errstr, 20);
  if (!$fp) return [false, "connect: $errstr"];
  $get = function () use ($fp) { $d = ''; while ($l = fgets($fp, 515)) { $d .= $l; if (isset($l[3]) && $l[3] === ' ') break; } return $d; };
  $say = function ($c) use ($fp, $get) { fwrite($fp, $c . "\r\n"); return $get(); };
  $get();
  $say('EHLO tvdyalek.store');
  if ($cfg['port'] == 587) {
    $say('STARTTLS');
    stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    $say('EHLO tvdyalek.store');
  }
  $say('AUTH LOGIN');
  $say(base64_encode($cfg['user']));
  $r = $say(base64_encode($cfg['pass']));
  if (strpos($r, '235') === false) { fclose($fp); return [false, "auth: $r"]; }
  $say('MAIL FROM:<' . $cfg['from'] . '>');
  foreach ($to as $rcpt) $say('RCPT TO:<' . $rcpt . '>');
  $say('DATA');
  $h  = 'From: ' . $cfg['from_name'] . ' <' . $cfg['from'] . ">\r\n";
  $h .= 'To: ' . implode(', ', $to) . "\r\n";
  $h .= 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n";
  $h .= "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n";
  $r = $say($h . "\r\n" . chunk_split(base64_encode($html)) . "\r\n.");
  $say('QUIT');
  fclose($fp);
  return [strpos($r, '250') !== false, $r];
}

[$okAdmin] = smtp_send($cfg, $cfg['admins'], 'طلب جديد ' . $orderId . ' — ' . $name, $adminHtml);

echo json_encode(['ok' => $okAdmin, 'orderId' => $orderId, 'admin' => $okAdmin]);
