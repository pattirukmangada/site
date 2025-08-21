<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Collect and sanitize inputs
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(422);
    exit('All fields are required.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('Invalid email address.');
}

// Email setup
$to      = "pattirukmangada2002@gmail.com";   // 🔴 Change this to your receiving email
$subject = "New Comment from {$name}";

$body  = "You received a new comment:\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Message:\n{$message}\n\n";

$headers = [
    "MIME-Version: 1.0",
    "Content-type: text/plain; charset=UTF-8",
    "From: Contact Form <no-reply@yourdomain.com>",   // use your domain
    "Reply-To: {$name} <{$email}>"
];

// Send email
$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo "✅ Thank you! Your message has been sent.";
} else {
    echo "❌ Sorry, your message could not be sent.";
}
