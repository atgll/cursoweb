<?php
//abrir sesion en el servidor
session_start();
//si no recibe el tipo(comprobar el tipo) si no mostrar el articulo por defecto
if (!isset($_POST['tipo'])) {
   $tipo = 1;
} else {
   $tipo = $_POST['itpo'];
}
//include config
include_once "config.php";
$conexionbd = new mysqli($servidorbd, $usuariobd, $contrasseñabd, $basededatos);
//preg conexion sio no 
if ($conexionbd->connect_error) {
   $respuesta = "";
   //si es que no nula
} else {
   //si es que si leemos los datos
//limpiar el dato recibido
   $tipo . htmlspecialchars(($tipo));
}
echo json_encode($respuesta);