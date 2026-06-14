<?php
/**
 * TVDYALEK — order mailer endpoint.
 * Receives a checkout order (JSON), emails a confirmation to the client and a
 * notification to the admins via Zoho SMTP. Drop this + config.php into the
 * htdocs of the CloudPanel PHP site for api.tvdyalek.store.
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
$email    = $clean($in['email']    ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $phone === '') {
  http_response_code(422); echo '{"ok":false,"error":"invalid"}'; exit;
}
if ($orderId === '') $orderId = 'TVD-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 5));

$esc = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$when = (new DateTime('now', new DateTimeZone('Africa/Casablanca')))->format('Y-m-d H:i');

// client's WhatsApp in international form (Morocco default) for the admin button
$waClient = preg_replace('/\D/', '', $phone);
if (strpos($waClient, '0') === 0) $waClient = '212' . substr($waClient, 1);

// business WhatsApp link for the client email (prefilled with the order id)
$waBizText = rawurlencode("مرحباً 👋 لقد قمت بطلب باقة {$planName} عبر موقع TVDYALEK\nرقم الطلب: {$orderId}\nالاسم: {$name}\nالمرجو إرسال معلومات الدفع. شكراً!");
$waBizLink = 'https://wa.me/' . $cfg['wa_number'] . '?text=' . $waBizText;

// ---------- Email shell (dark + gold, inline styles for email clients) ----------
function shell(string $inner): string {
  return '<!DOCTYPE html><html dir="rtl" lang="ar"><body style="margin:0;background:#0b0908;font-family:Tahoma,Arial,sans-serif;color:#f5efe2;">'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0b0908;padding:28px 14px;"><tr><td align="center">'
    . '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#181209;border:1px solid rgba(220,168,42,.28);border-radius:16px;overflow:hidden;">'
    . '<tr><td style="padding:22px 28px;border-bottom:1px solid rgba(220,168,42,.22);">'
    . '<span style="font-size:22px;font-weight:bold;letter-spacing:2px;background:linear-gradient(135deg,#f7d877,#dca82a);-webkit-background-clip:text;background-clip:text;color:#dca82a;">TVDYALEK</span>'
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

// ---------- Client confirmation ----------
$clientHtml = shell(
  '<h1 style="margin:0 0 6px;font-size:24px;color:#f5d265;">تم تأكيد طلبك ✅</h1>'
  . '<p style="margin:0 0 18px;color:#d8cfbb;font-size:15px;line-height:1.9;">شكراً ' . $esc($name) . '، تم استلام طلبك بنجاح. سيتواصل معك أحد مسؤولينا قريباً عبر واتساب لإتمام عملية الدفع وتفعيل اشتراكك.</p>'
  . '<table role="presentation" width="100%" style="background:#1f1810;border-radius:12px;padding:6px 18px;margin:0 0 22px;">'
  . row('رقم الطلب', '<span style="color:#f5d265;letter-spacing:1px;">' . $esc($orderId) . '</span>')
  . row('الباقة', $esc($planName))
  . row('السعر', $esc($price) . ' درهم')
  . '</table>'
  . '<div style="text-align:center;margin:10px 0 22px;">' . btn($waBizLink, 'تواصل عبر واتساب') . '</div>'
  . '<p style="margin:0;color:#b0a48c;font-size:13px;line-height:1.9;background:#1f1810;border-radius:10px;padding:14px 18px;">⏱️ لم يصلك رد خلال 10 دقائق؟ تواصل معنا مباشرة عبر الزر أعلاه واذكر رقم طلبك <b style="color:#f5d265;">' . $esc($orderId) . '</b>.</p>'
);

// ---------- Admin notification ----------
$waClientLink = 'https://wa.me/' . $waClient;
$adminHtml = shell(
  '<h1 style="margin:0 0 6px;font-size:23px;color:#f5d265;">🔔 طلب جديد من الموقع</h1>'
  . '<p style="margin:0 0 18px;color:#d8cfbb;font-size:15px;">وصلك طلب اشتراك جديد عبر tvdyalek.store:</p>'
  . '<table role="presentation" width="100%" style="background:#1f1810;border-radius:12px;padding:6px 18px;margin:0 0 22px;">'
  . row('رقم الطلب', '<span style="color:#f5d265;">' . $esc($orderId) . '</span>')
  . row('الاسم', $esc($name))
  . row('البريد', $esc($email))
  . row('الواتساب', $esc($phone))
  . row('الباقة', $esc($planName))
  . row('السعر', $esc($price) . ' درهم')
  . row('التاريخ', $esc($when))
  . '</table>'
  . '<div style="text-align:center;margin:6px 0;">' . btn($waClientLink, 'تواصل مع العميل عبر واتساب') . '</div>'
);

// ---------- Minimal SMTP (implicit SSL on 465 / STARTTLS on 587) ----------
function smtp_send(array $cfg, array $to, string $subject, string $html, ?string $replyTo = null): array {
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
  if ($replyTo) $h .= 'Reply-To: ' . $replyTo . "\r\n";
  $h .= 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n";
  $h .= "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n";
  $r = $say($h . "\r\n" . chunk_split(base64_encode($html)) . "\r\n.");
  $say('QUIT');
  fclose($fp);
  return [strpos($r, '250') !== false, $r];
}

[$okClient] = smtp_send($cfg, [$email], 'تأكيد طلبك في TVDYALEK — ' . $orderId, $clientHtml);
[$okAdmin]  = smtp_send($cfg, $cfg['admins'], 'طلب جديد ' . $orderId . ' — ' . $name, $adminHtml, $email);

echo json_encode(['ok' => ($okClient || $okAdmin), 'orderId' => $orderId, 'client' => $okClient, 'admin' => $okAdmin]);
