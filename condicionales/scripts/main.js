//Ejercicio 1//
//----------------------------------------------------------//
const surface = document.getElementById("startEj1")

surface.addEventListener('mouseover', function () {
   let number = prompt("Introduce un número:")
   let result = document.getElementById("resultEj1")
   if (number < 10) {
      result.textContent = "El número es menor que diez."
   } else {
      result.textContent = "El número es mayor o igual que diez."
   }
})

//Ejercicio 2//
//----------------------------------------------------------//
const numEj2 = document.getElementById("numberEj2")
const ulEj2 = document.getElementById("ulEj2")
const resultEj2 = ulEj2.getElementsByTagName("li")

function Ejercicio2() {
   if (numEj2.value != "") {
      var valor = numEj2.value;
      valor = parseInt(valor);
      for (let i = 0; i < resultEj2.length; i++) {
         resultEj2[i].textContent = valor++;
         var intRed = parseInt(resultEj2[i].textContent);
         if (intRed % 2 == 0) {
            resultEj2[i].style.color = "red";
         } else {
            resultEj2[i].style.color = "black";
         }
      }
   } else {

   }
}

//Ejercicio 3//
//----------------------------------------------------------//
const numEj3 = document.getElementById("numberEj3")
const ulEj3 = document.getElementById("ulEj3")
const resultEj3 = ulEj3.getElementsByTagName("li")

function Ejercicio3() {
   if (numEj3.value == "1") {
      var valor = numEj3.value;
      valor = parseInt(valor);
      for (let i = 0; i < resultEj3.length; i++) {
         resultEj3[i].textContent = valor++;
         var esPar = parseInt(resultEj3[i].textContent);
         if (esPar % 2 == 0) {
            resultEj3[i].textContent = esPar + " es par";
         } else {

         }
      }
   } else if (numEj3.value != "1" || numEj3.value == "") {
      resultEj3[0].textContent = "Tiene que empezar desde 1";
   }
}

function resetEj3() {
   for (let i = 0; i < resultEj3.length; i++) {
      resultEj3[i].textContent = "";
   }
   numEj3.value = "";
}

//Ejercicio 4//
//----------------------------------------------------------//

let listnames = document.getElementById("nombresEj4");
let getname = document.getElementById("nombreEj4");
const arraynames = [];

function addName() {
   const name = getname.value.trim();
   if (name !== "") {
      arraynames.push(name);
      getname.value = "";
      actualizarlista();
   }
}

function actualizarlista() {
   listnames.innerHTML = "";
   arraynames.forEach(arrayname => {
      const li = document.createElement("li");
      li.textContent = arrayname;
      listnames.appendChild(li);
   })

}

//Ejercicio 5//
//----------------------------------------------------------//

let contador = 0
const boton = document.getElementById("clicksbtn")
const resultado = document.getElementById("contadorEj5")

boton.addEventListener("click", () => {
   contador++
   if (contador === 5) {
      resultado.textContent = "¡Has llegado a 5!";
   } else {
      resultado.textContent = contador;
   }
})


//Ejercicio 6//
//----------------------------------------------------------//
const buttonEdad = document.getElementById("btnEdad");

buttonEdad.addEventListener("click", ()=> {
   let age = parseInt(document.getElementById("edad").value)
   let answer = age >= 18 ? "Mayor de edad" : "Menor de edad.";
   document.getElementById("respuestaEdad").textContent = answer;
})

//Ejercicio 7//
//----------------------------------------------------------//

let i = 5;
let cuenta = document.getElementById("listaNumeros")

while (i <= 15) {
   cuenta.innerHTML += `<li>${i}</li>`;
   i++
}

//Ejercicio 8//
//----------------------------------------------------------//
let contenedor = document.getElementById("contParrafos")
let parrafos = contenedor.querySelectorAll("p")
for (i = 0; i < parrafos.length; i++) {
   parrafos[i].addEventListener("click", (e)=> {
      //currentTarget para hacer que el evento se ejecute en cada elemento
      e.currentTarget.textContent = "¡Click detectado!";
   })
}

//Ejercicio 9//
//----------------------------------------------------------//

const personas = [
   {nombre: "Ana", edad: 24},
   {nombre: "Alejo", edad: 16},
   {nombre: "Marta", edad: 20},
   {nombre: "Pedro", edad: 53},
   {nombre: "Clara", edad: 12},
   {nombre: "Maria", edad: 37},
   {nombre: "Nuria", edad: 9}
]

let listaEj9 = document.getElementById("mayoresEdad")
let todos = document.getElementById("listaCompleta")



personas.forEach(persona => {

   todos.innerHTML += `<li>Nombre: ${persona.nombre} Edad: ${persona.edad}</li>`

   if (persona.edad >= 18) {
      //console.log(persona.nombre)
      listaEj9.innerHTML += `<li>${persona.nombre}</li>`
   }
}) 
