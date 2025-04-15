<?php
//abrir sesion en el servidor
session_start();
//si no recibe el tipo(comprobar el tipo) si no mostrar el articulo por defecto
if (!isset($_POST['tipo'])) {
   $tipo = 1;
} else {
   $tipo = $_POST['tipo'];
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
   $tipo = htmlspecialchars($tipo);
   $consulta = "SELECT * FROM articulos WHERE tipo=$tipo";
   //exec la consulta
   $resultado = $conexionbd->query($consulta);
   //comprobar si hay registros
   if($resultado->num_rows>0) {
      $respuesta = $resultado->fetch_all(MYSQLI_ASSOC);//hace que todos los datos del/los registro/s son tratados y convertidos en array
   }else {
      $respuesta = "";
   }
   //liberar memoria de resulatado del servidor
   $resultado->free_result();
   //cerrar conexion
   $conexionbd->close();
}
echo json_encode($respuesta);