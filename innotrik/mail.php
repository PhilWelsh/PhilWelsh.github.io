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
$recipient = "phizs@hotmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>