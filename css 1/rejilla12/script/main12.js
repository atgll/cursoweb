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

const styleDias = document.querySelectorAll(".dia")
const orderDate = document.getElementById("orderdate")

styleDias.forEach(function(styleDia) {
    styleDia.addEventListener("click", function() {
        styleDia.style.background = "radial-gradient(var(--pink), var(--green))"
    })
})


document.querySelectorAll(".dia").forEach(function(addDate) {
    addDate.addEventListener("click", function() {
        orderDate.value = addDate.textContent
    })
})

const lima = document.getElementById("lima")
const chocolate = document.getElementById("chocolate")
const limon = document.getElementById("limon")
const fresa = document.getElementById("fresa")
const nata = document.getElementById("nata")
const straciatela = document.getElementById("straciatela")

const order = document.getElementById("resumen")

lima.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Lima"
    }else {
        order.value += ", Lima"
    }
})

chocolate.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Chocolate"
    }else {
        order.value += ", Chocolate"
    }
})

limon.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Limón"
    }else {
        order.value += ", Limón"
    }
})

fresa.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Fresa"
    }else {
        order.value += ", Fresa"
    }
})

nata.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Nata"
    }else {
        order.value += ", Nata"
    }
})

straciatela.addEventListener("click", function() {
    if (order.value === "") {
        order.value = "Stracciatella"
    }else {
        order.value += ", Stracciatella"
    }
})








/*id="chocolate">Chocolate</
id="limon">Limón</
id="fresa">Fresa</
id="nata">Nata</
id="straciatela">Stracciatella</*/