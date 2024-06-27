<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */
  // email address of choice
  $receiving_email_address = 'makhil@saintpeters.edu';
  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Add additional fields if needed
  $contact->add_message($_POST['name'], 'From');
  $contact->add_message($_POST['email'], 'Email');
  $contact->add_message($_POST['message'], 'Message', 10);

  // Add your SMTP credentials if you want to use SMTP to send emails
  $contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => 'your_email@gmail.com',
    'password' => 'your_password',
    'port' => '587'
  );

  // Add any additional information you want to include in the email
  $contact->add_attachment($_FILES['attachment'], 'Attachment');
  $contact->add_field('Phone', '+1 (802) 261-5876');
  $contact->add_field('Location', 'New York, USA');
  $contact->add_field('LinkedIn', 'https://www.linkedin.com/in/venkata-akhil-mettu-51a48b277/');

  echo $contact->send();
?>
