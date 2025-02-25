let miBoton = document.getElementById("welcomebutton");
let miTitulo = document.querySelector(".welcome");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Welcome, " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Welcome, " + nombreAlmacenado;
}

miBoton.onclick = function() {
    console.log(miBoton);
    
    estableceNombreUsuario();
}