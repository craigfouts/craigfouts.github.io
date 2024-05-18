<?php

use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }


    if (empty($message)) {
        $errors[] = 'Message is empty';
    }

    if (!empty($errors)) {
        $allErrors = join('<br />', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    } else {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'live.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 587;
        $mail->Username = 'api';
        $mail->Password = '66a5276f97d6b0ef2102d7b83d570b6e';
        $mail->SMTPSecure = 'tls';
        $mail->addAddress('foutscw@gmail.com', 'Me');
        $mail->Subject = 'New message from your website';

        $mail->isHTML(true);
        $paragraphs = ["Name: {$name}", "Email: {$email}", "Message:", nl2br($message)];
        $body = join('<br />', $paragraphs);
        $mail->Body = $body;
        echo $body;

        if($mail->send()){
            header('Location: index.html');
        } else {
            $errorMessage = 'Something went wrong. Mailer Error: ' . $mail->ErrorInfo;
        }
    }
}

?>