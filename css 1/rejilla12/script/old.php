<?php

// Incluir la librería PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../../vendor/autoload.php';  // Si usas Composer


    // print_r($_POST);
    echo "<pre>";
    var_export($_REQUEST);
    echo "</pre>";

    $listasabores = $_POST['listasabores'];
    $orderdate = $_POST['orderdate'];
    $email = $_POST['mail'];
    $user = $_POST['user'];
    $paytype = $_POST['paytype'];

    // Crear una instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();  // Usar SMTP
    $mail->Host = 'smtp.gmail.com';  // Servidor SMTP (por ejemplo, smtp.gmail.com)
    $mail->SMTPAuth = true;
    $mail->Username = 'outlook_252BA7007B136111@outlook.com';  // Tu dirección de correo
    $mail->Password = 'nEw2401&atg';  // La contraseña de tu correo
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Cifrado TLS
    $mail->Port = 587;  // Puerto SMTP (587 es común para TLS)

    // Remitente y destinatarios
    $mail->setFrom('outlook_252BA7007B136111@outlook.com', 'Lima-Limon');  // Dirección del remitente
    $mail->addAddress($email, 'Cliente');  // Dirección del destinatario

    // Contenido del correo
    $mail->isHTML(true);  // El correo es en formato HTML
    $mail->Subject = 'Confirmación de Pedido Lima-Limon';
    $mail->Body    = "
        <html>
        <head>
            <title>Confirmación de Pedido</title>
        </head>
        <body>
            <h2>¡Gracias por tu compra!</h2>
            <p>Estimado cliente,</p>
            <p>Hemos recibido tu pedido con éxito. A continuación, te mostramos los detalles:</p>
            
            <p>Tu pedido será enviado a la dirección que proporcionaste. Recibirás otra notificación cuando tu pedido haya sido enviado.</p>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <p>Gracias por comprar con nosotros.</p>
            <p>Saludos,</p>
            <p><strong>El equipo de Lima-Limon</strong></p>
        </body>
        </html>
    ";

    // Enviar el correo
    $mail->send();
    echo 'Correo enviado con éxito.';
} catch (Exception $e) {
    echo "No se pudo enviar el correo. Error de PHPMailer: {$mail->ErrorInfo}";
}