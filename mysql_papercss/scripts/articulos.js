export function articulosver($tipo) {
   //se coomprueba si el naveagdor soporta plantillas
   if('content' in document.createElement('template')) {
      //obtenr datos de los articulos segun el tipo
      //primero creamos el dato a enviar
      let datos = new FormData();
      datos.append("tipo", $tipo);
      //realizar llamada al archivo de datos
      fetch("./php/leerarticulos.php", {
         method: 'POST',
         body: datos
      })
      .then(respuesta => respuesta.json())
      .then(respuestajson => {
         console.log(respuestajson)
      }
      )
   }
}