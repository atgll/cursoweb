let miBoton = document.getElementById("progressbutton");
let miProgressBar = document.getElementById("progressbar");
let moreProgressBar = 0;

console.log(miBoton);


function fullProgressBar() {
   moreProgressBar += 10;
   return miProgressBar.value = moreProgressBar;
}

miBoton.addEventListener("click", function(event) {
    event.preventDefault();
    fullProgressBar();
})