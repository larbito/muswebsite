<?php
// Copy this file to config.php (same folder) on the server and fill in the
// real Zoho SMTP password. config.php is NOT committed to git.
//
// Create an app-specific password in Zoho:
//   Zoho Mail -> Settings -> Security -> App Passwords -> Generate
// (use that 16-char password below, not your normal login password)

return [
  'host'      => 'smtp.zoho.com',          // use smtp.zoho.eu / smtp.zoho.in if your Zoho region differs
  'port'      => 465,                        // 465 = SSL (recommended)
  'user'      => 'support@tvdyalek.store',
  'pass'      => 'PUT-YOUR-ZOHO-APP-PASSWORD-HERE',
  'from'      => 'support@tvdyalek.store',
  'from_name' => 'TVDYALEK',
  'admins'    => ['mustapha.el9797@gmail.com', 'iaitsoussi@gmail.com'],
  // Business WhatsApp shown to the client in the confirmation email:
  'wa_number' => '212714561749',
  // Allowed browser origins that may POST here:
  'allow_origins' => ['https://tvdyalek.store', 'https://www.tvdyalek.store'],
];
