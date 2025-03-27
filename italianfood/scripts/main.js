
const logo = document.getElementById("logomain");
const navscroll = document.getElementById("navegacion");

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        logo.style.width = "70px";
        navscroll.style.background = ("black")
    } else {
        logo.style.width = "125px"
        navscroll.style.background = ("linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(195, 195, 195, 0) 100%)")
    }
})

function EventosFormulario() {
    //Leer formulario
    const formulario = document.getElementById("reserva");
    //añadir evento de envio
    formulario.addEventListener("submit", (e) => {
        //evitar propagacion de evento
        e.preventDefault();
        //leer datos formulario
        const datos = new FormData(formulario);
        //realizar envio de datos
        fetch("./scripts/reservation.php", {
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
                //seleccionar dialogo en html
                const dialogo = document.querySelector("#dialogo1");
                //select <p> de dialogo html
                const textoDialogo = document.querySelector("#textodialogo");
                //seleccionar el boton de cierre  del dialogo html
                const botonCierre = document.querySelector("#botoncierre");
                //si existen los tres
                if (dialogo && textoDialogo && botonCierre) {
                    //insert resp dentro <p>
                    textoDialogo.textContent = datosjson.mensaje || "Reserva enviada correctamente.";
                    // const para el boton cerrar el dialogo
                    const cerrarDialogo = () => {
                        //cerrar dialog y quitar el event click del boton
                        dialogo.close();
                        botonCierre.removeEventListener("click", cerrarDialogo);
                    }
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
});

$('.slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },

        {
            breakpoint: 750,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },

        {
            breakpoint: 550,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});

