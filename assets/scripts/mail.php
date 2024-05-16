<?php

$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    if (empty($name)) {
        $errors[] = 'Missing name';
    }

    if (empty($email)) {
        $errors[] = 'Missing email';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }

    if (empty($message)) {
        $errors[] = 'Missing message';
    }

    if ($empty($errors)) {
        $recipient = 'foutscw@gmail.com';

        $headers = 'From: $name <$email>';

        if (mail($recipient, $message, $headers)) {
            echo 'Successfully sent email.';
        } else {
            echo 'Failed to send email.';
        }
    } else {
        echo 'Form contains the following errors:<br>';
        foreach ($errors as $error) {
            echo '- $error<br>';
        }
    }
} else {
    header('HTTP/1.1 403 Forbidden');
    echo 'Access denied.'
}

?>
