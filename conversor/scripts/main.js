function obtenerLitros() {
   if (document.getElementById('number1').value != "") {
      var valor = document.getElementById('number1').value;
      valor = parseInt(valor);
      var dl = valor*10
      var cl = valor*100
      var ml = valor*1000
      document.getElementById("etiqueta1").innerHTML="El resultado es: "+dl+ " decilitros, "+cl+" centilitros y "+ml+" mililitros.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerLongitud() {
   if (document.getElementById('number2').value != "") {
      var valor = document.getElementById('number2').value;
      valor = parseInt(valor);
      var m = valor*1000
      var cm = valor*100
      var mm = valor*1000
      document.getElementById("etiqueta2").innerHTML="El resultado es: "+m+ " metros, "+cm+" centimetros y "+mm+" milimetros.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerTiempo() {
   if (document.getElementById('number3').value != "") {
      var valor = document.getElementById('number3').value;
      valor = parseInt(valor);
      var h = valor*24
      var min = h*60
      var seg = min*1000
      document.getElementById("etiqueta3").innerHTML="El resultado es: "+h+ " horas, "+min+" minutos y "+seg+" segundos.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerTemperatura() {
   if (document.getElementById('number4').value != "") {
      var valor = document.getElementById('number4').value;
      valor = parseInt(valor);
      var F=(valor*1.8)+32;
      var k=valor+273.15;
      document.getElementById("etiqueta4").innerHTML="El resultado es: "+F+ " grados Fahrenheit y "+k+" grados Kelvin.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerPeso() {
   if (document.getElementById('number5').value != "") {
      var valor = document.getElementById('number5').value;
      valor = parseInt(valor);
      var kg = valor*1000
      var g = kg*1000
      var mg = g*1000
      document.getElementById("etiqueta5").innerHTML="El resultado es: "+kg+ " kilogramos, "+g+" gramos y "+mg+" miligramos.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerPesaje() {
   if (document.getElementById('number6').value != "") {
      var valor = document.getElementById('number6').value;
      valor = parseInt(valor);
      var piedras = valor*0.1575
      var lb=valor*2.2046
      var oz=valor*35.274
      var kilates=valor*5000
      document.getElementById("etiqueta6").innerHTML="El resultado es: "+piedras+ " piedras, "+lb+" libras, "+oz+" onzas "+kilates+" y kilates.";
   } else {
      alert("Introduce un valor")
   }
}

function obtenerDistancia() {
   if (document.getElementById('number7').value != "") {
      var valor = document.getElementById('number7').value;
      valor = parseInt(valor);
      var millas = valor*0.621371;
      var yardas = valor*1093.61;
      var pies = valor*3280.84;
      var pulgadas = valor*39370.1; 
      document.getElementById("etiqueta7").innerHTML="El resultado es: "+millas+ " millas, "+yardas+" yardas, "+pies+" pies, "+pulgadas+" pulgadas.";
   } else {
      alert("Introduce un valor")
   }
}


function obtenerMoneda() {
   if (document.getElementById('number8').value != "") {
      var valor = document.getElementById('number8').value;
      valor = parseInt(valor);
      var dolares=valor*1.13;
      var libras= valor*0.88;
      var yenes= valor*128.27;
      var yuanes= valor*7.85; 
      document.getElementById("etiqueta8").innerHTML="El resultado es: "+dolares+" dolares, "+libras+" libras, "+yenes+" yenes, "+yuanes+" yuanes.";
   } else {
      alert("Introduce un valor")
   }
}


function obtenerVelocidad() {
   if (document.getElementById('number9').value != "") {
      var valor = document.getElementById('number9').value;
      valor = parseInt(valor);
      var millas = valor*0.62137;
      var nudos= valor*0.539957;
      document.getElementById("etiqueta9").innerHTML="El resultado es: "+millas+ " millas/hora y "+nudos+" nudos.";
   } else {
      alert("Introduce un valor")
   }
}


function obtenerArea() {
   if (document.getElementById('number10').value != "") {
      var valor = document.getElementById('number10').value;
      valor = parseInt(valor);
      var hectareas = valor*100;
      var acres= valor*247.105;
      var millas = valor*0.386102; 
      document.getElementById("etiqueta10").innerHTML="El resultado es: "+hectareas+ " hectareas, "+acres+" acres y "+millas+" millas cuadradas.";
   } else {
      alert("Introduce un valor")
   }
}

let button = document.querySelector("#btnTheme");
let body = document.body;
let symbol = document.querySelector("#btnSymbol")

function theme() {
   body.classList.toggle("dark-mode");
   const isDarkMode = body.classList.contains("dark-mode");

   localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

   symbol.classList.replace(isDarkMode ? "bi-moon" : "bi-sun", isDarkMode ? "bi-sun" : "bi-moon")

   button.classList.toggle("btn-dark", !isDarkMode);
   button.classList.toggle("btn-light", isDarkMode);
};

window.onload = function() {
   const savedTheme = localStorage.getItem("darkMode");
   if (savedTheme === "enabled") {
      body.classList.add("dark-mode");
      symbol.classList.replace("bi-moon", "bi-sun");
      button.classList.replace("btn-dark", "btn-light");
   }
};

button.addEventListener("click", theme);
