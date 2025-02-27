<?php

use MailerSend\MailerSend;
use MailerSend\Helpers\Builder\Recipient;
use MailerSend\Helpers\Builder\EmailParams;

require '../../../vendor/autoload.php';  // Si usas Composer

$mailersend = new MailerSend(['api_key' => 'mlsn.688d1bd7aa58728c6236db375847382b857b48292a006bfc2a4a924b05cc98d8']);

    // print_r($_POST);
    echo "<pre>";
    var_export($_REQUEST);
    echo "</pre>";

    $listasabores = $_POST['listasabores'];
    $orderdate = $_POST['orderdate'];
    $email = $_POST['mail'];
    $user = $_POST['user'];
    $paytype = $_POST['paytype'];


$recipients = [
    new Recipient($email, 'Your Client'),
];

$emailParams = (new EmailParams())
    ->setFrom('trial-3yxj6ljk251gdo2r.mlsender.net')
    ->setFromName('Lima-Limon')
    ->setRecipients($recipients)
    ->setSubject('Subject')
    ->setHtml('This is the HTML content')
    ->setText('This is the text content')
    ->setReplyTo('reply to')
    ->setReplyToName('reply to name');


    var_export($mailersend->email->send($emailParams));
