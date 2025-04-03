let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-button");
const quitText = document.getElementById("videoText");
const quitTop = document.getElementById("divTop");
const quitBottom = document.getElementById("divBottom");

if (playButton) {
   playButton.addEventListener("click", handlePlayButton, false);
   playVideo();
   
   videoElem.addEventListener("ended", (event) => {
      console.log(
         "Video stopped either because it has finished playing or no further data is available.",
      );
   
      playButton.classList.remove("d-none");
      quitText.classList.remove("d-none");
      quitTop.classList.remove("d-none");
      quitBottom.classList.remove("d-none");
   });
   
   async function playVideo() {
      try {
         await videoElem.play();
         playButton.classList.add("d-none");
         quitText.classList.add("d-none");
         quitTop.classList.add("d-none");
         quitBottom.classList.add("d-none");
      } catch (err) {
         playButton.classList.remove("d-none");
         quitText.classList.remove("d-none");
         quitTop.classList.remove("d-none");
         quitBottom.classList.remove("d-none");
      }
   }
   
   function handlePlayButton() {
      if (videoElem.paused) {
         playVideo();
      } else {
         videoElem.pause();
         playButton.classList.remove("d-none");
         quitText.classList.remove("d-none");
         quitTop.classList.remove("d-none");
         quitBottom.classList.remove("d-none");
      }
   }
}

//Leer formulario
const formulario = document.getElementById("formQuotes");

//seleccionar dialogo en html
const dialogo = document.querySelector("#dialogo1");
//select <p> de dialogo html
const textoDialogo = document.querySelector("#textodialogo");
//seleccionar el boton de cierre  del dialogo html
const botonCierre = document.querySelector("#botoncierre");

// const para el boton cerrar el dialogo
const cerrarDialogo = () => {
   //cerrar dialog y quitar el event click del boton
   dialogo.close();
   botonCierre.removeEventListener("click", cerrarDialogo);
}

function EventosFormulario() {
   //añadir evento de envio
   formulario.addEventListener("submit", (e) => {
      console.log(formulario);

      //evitar propagacion de evento
      e.preventDefault();
      //leer datos formulario
      const datos = new FormData(formulario);
      //realizar envio de datos
      fetch("./scripts/quotesform.php", {
         method: "POST",
         body: datos,
      })
         .then(respuesta => {
            if (!respuesta.ok) {
               throw new Error("Error en la respuesta del servidor");
            }
            return respuesta.json();
         })
         .then(datosjson => {        //datos en json
            console.log("Respuesta del servidor:", datosjson);

            //si existen los tres
            if (dialogo && textoDialogo && botonCierre) {
               //insert resp dentro <p>
               textoDialogo.textContent = datosjson.mensaje || "Consulta enviada correctamente.";

               //añadir la const anterior al boton de cierre
               botonCierre.addEventListener("click", cerrarDialogo);
               console.log("cerrarDialogo", cerrarDialogo);
               dialogo.showModal(); //Muestra el modal
            } else {
               console.log("no se encontro el modal en el DOM");
            }
         })
         .catch(error => console.error("Error en fetch:", error));
   });
}

window.addEventListener("load", function () {
   EventosFormulario();
   console.log(formulario);
});