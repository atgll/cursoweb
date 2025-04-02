<?php
// Activa la visualización de errores (solo para pruebas)
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

// Captura toda la salida y la descarta
// ob_start();
// header('Content-Type: application/json');  // Indica que enviamos JSON
// echo "<pre>";
// var_export($_REQUEST);
// echo "</pre>";
// exit();

//Load Composer's autoloader
require '../../src/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../src');
$dotenv->load();

function limpiar(string $nombre, int $lenght = 10, bool $isInt = false) {
    return mb_substr(
        htmlspecialchars(
            trim(
                ($isInt ? (int)$_POST[$nombre] : $_POST[$nombre]) ?? ''
                )
        ), 
        0, 
        $lenght,
    );
}

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input = [
    'reservation-date' => [10, false],
    'reservation-hour' => [5, false],
    'client' => [128, false],
    'email' => [256, false],
    'tel' => [12, true],
    'message' =>  [250, false],
];

foreach ($input as $name => $value) {
    $input[$name] = limpiar($name, $value[0], $value[1]);
}


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);



try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = $_ENV['SMTP_HOST'];                     //Set the SMTP server to send through
    $mail->SMTPAuth   =  !!($_ENV['SMTP_AUTH'] === "true");                                   //Enable SMTP authentication
    $mail->Username   =  $_ENV['SMTP_USER'];                     //SMTP username
    $mail->Password   =  $_ENV['SMTP_PASS'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = $_ENV['SMTP_PORT'];                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

// $logo = file_get_contents('logo.txt');

$body = 'Mr/Mrs. ' . $input['client'] . 'Ha hecho una reserva el ' . $input['reservation-date'] . ' a las' .$input['reservation-hour']. '. Su contacto es tel: ' . $input['tel'] . ' mail: ' . $input['email'] . '. Especificaciones: ' . $input['message'] . '';

    //Recipients
    $mail->setFrom('angel@webdesignelche.com', 'Mailer');
    $mail->addAddress('angel@webdesignelche.com', 'Angel'); //Add a recipient

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', name: '../sources/images/logo/nuevologo/laurel_cn_fondo.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'The Laurel';
    $mail->Body    = $body = 'Mr/Mrs. ' . $input['client'] . 'Ha hecho una reserva el ' . $input['reservation-date'] . ' a las' .$input['reservation-hour']. '. Su contacto es tel: ' . $input['tel'] . ' mail: ' . $input['email'] . '. Especificaciones: ' . $input['message'] . '';
    $mail->AltBody = 'Mr/Mrs. ' . $input['client'] . ' Ha hecho una reserva el ' . $input['reservation-date'] . ' a las ' .$input['reservation-hour']. '.Su contacto es tel: ' . $input['tel'] . ' mail: ' . $input['email'] . '. Especificaciones: ' . $input['message'] . '';
    
    $mail->send();
    ob_end_clean();
    echo json_encode(value: ["mensaje" =>"Message has been sent"]);
} catch (Exception $e) {
    echo json_encode(value: ["mensaje" =>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
