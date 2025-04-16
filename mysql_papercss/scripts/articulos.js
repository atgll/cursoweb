export function articulosver($tipo, $contenedordatos) {
   //se coomprueba si el naveagdor soporta plantillas
   if ('content' in document.createElement('template')) {
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
            // console.log(respuestajson)
            let contenedor = document.getElementById($contenedordatos);

            for(const articulo of respuestajson) {
               let tarjeta = plantilla_articulos_1.content.cloneNode(true);
               tarjeta.querySelector('.card-title').textContent = articulo.nombre;
               tarjeta.querySelector('.card-subtitle').textContent = articulo.fecha;
               tarjeta.querySelector('.card-text').textContent = articulo.descripcion;
               tarjeta.querySelector('img').src = "./css/img/imgarticulos/" + articulo.imagen;
               contenedor.appendChild(tarjeta);
            }
         })
   }
}