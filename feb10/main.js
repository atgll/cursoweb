let miBoton = document.getElementById("progressbutton");
let miProgressBar = document.getElementById("progressbar");
let moreProgressBar = 0;
let lessButton = document.getElementById("lessButton");



function fullProgressBar() {
    if (moreProgressBar <= 100) {
        moreProgressBar += 10;
        return miProgressBar.value = moreProgressBar;
    } else {
        alert("The bar is full.")
    }

}

function emptyProgressBar() {
    if (moreProgressBar >= 0) {
        moreProgressBar -= 10;
        return miProgressBar.value = moreProgressBar
    } else {
        alert("The bar is empty.")
    }
}

miBoton.addEventListener("click", function(event) {
    event.preventDefault();
    fullProgressBar();
})

lessButton.addEventListener("click", function(event) {
    event.preventDefault();
    emptyProgressBar();
})

