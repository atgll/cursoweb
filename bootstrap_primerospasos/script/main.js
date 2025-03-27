document.addEventListener("DOMContentLoaded", function () {
   var container = document.querySelector(".container"); // Asegúrate de que la clase es correcta

   if (container) {
      var mixer = mixitup(container);
   } else {
      console.error("No se encontró el contenedor para MixItUp");
   }
});