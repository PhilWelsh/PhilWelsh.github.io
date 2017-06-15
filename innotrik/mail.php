<?php 
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$website = $_POST['website'];
$job = $_POST['job'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $firstname $lastname\n
email: $email,\n
website: $website,\n
job: $job,\n
phone: $phone,\n
Message: $message";
$recipient = "phizs@hotmail.com", "philwelsh3d@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
        echo "The email($email_subject) was successfully sent.";
    } else {
        echo "The email($email_subject) was NOT sent.";
    }
?>
