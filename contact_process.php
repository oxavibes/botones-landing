<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendors/phpmailer/src/Exception.php';
require 'vendors/phpmailer/src/PHPMailer.php';
require 'vendors/phpmailer/src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$to = "admin@tubotones.com";
$name = $_REQUEST['name'];
$from = $_REQUEST['email'];
$csubject = $_REQUEST['subject'];
$cmessage = $_REQUEST['message'];


try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.zoho.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'admin@tubotones.com';               	// SMTP username
    $mail->Password   = '3%K!4MZ2nqCHECM';                      // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($to, 'tubotones.com');
    $mail->addAddress($to);                                     // Add a recipient
    //$mail->addAddress('ellen@example.com');                   // Name is optional
    $mail->addReplyTo($from, $name);
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Content
    $mail->isHTML(true);                                       // Set email format to HTML
    $mail->Subject = 'Tienes un mensaje proveniente de Tubotones' . $csubject;
    $mail->Body    = $cmessage;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}