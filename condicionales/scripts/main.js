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
   let name = getname.value.trim();
   if (name !== "") {
      arraynames.push(name);
      getname.value = "";
      actualizarlista();
   }
}

function actualizarlista() {
   listnames.innerHTML = "";
   arraynames.forEach(arrayname => {
      let li = document.createElement("li");
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
      contador = 0;
   } else {
      resultado.textContent = contador;
   }
})


//Ejercicio 6//
//----------------------------------------------------------//
const buttonEdad = document.getElementById("btnEdad");

buttonEdad.addEventListener("click", () => {
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
   parrafos[i].addEventListener("click", (e) => {
      //currentTarget para hacer que el evento se ejecute en cada elemento
      e.currentTarget.textContent = "¡Click detectado!";
   })
}

//Ejercicio 9//
//----------------------------------------------------------//

const personas = [
   { nombre: "Ana", edad: 24 },
   { nombre: "Alejo", edad: 16 },
   { nombre: "Marta", edad: 20 },
   { nombre: "Pedro", edad: 53 },
   { nombre: "Clara", edad: 12 },
   { nombre: "Maria", edad: 37 },
   { nombre: "Nuria", edad: 9 }
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

//Ejercicio 10//
//----------------------------------------------------------//

function decodeHtml(html) {
   const txt = document.createElement("textarea");
   txt.innerHTML = html;
   return txt.value;
}

let urlcategories = 'https://opentdb.com/api_category.php';
fetch(urlcategories).then(response => response.json()).then(data => { createCategoryButtons(data) });

let contenedorBotones = document.getElementById("categoriesSelect")

const categories = [
   ["Science", "green", "#005400", "idcat" = [17, 18, 19, 28, 30]],
   ["Entertainment", "pink", "#fd6882", "idcat" = [10, 11, 12, 13, 14, 15, 16, 32, 32]],
   ["Sports", "orange", "darkorange"],
   ["Geography", "blue", "darkblue"],
   ["History", "yellow", "#ceaf00"],
   ["Art", "purple", "darkpurple"]
];

function createCategoryButtons(data) {
   console.log(data)

   data.trivia_categories.forEach((cat) => {
      let boton = document.createElement("button");
      boton.textContent = cat.name;
      contenedorBotones.appendChild(boton);
   })
}

let getData = document.getElementById('getData17');
let getData18 = document.getElementById('getData18');

getData17.addEventListener('click', () => {
   createQuestions(17);
})




function createQuestions(categoryId) {
   let url = 'https://opentdb.com/api.php?amount=';
   let amount = 5;
   fetch(url + amount + '&category=' + categoryId).then(response => response.json()).then(data => { createQ(data, amount) });
}

function createQ(data, amount) {


   console.log(data.results);

   let arrayQ = [];

   data.results.forEach((item, index) => {
      console.log(item.question);

      arrayQ.push([
         'btn' + index,
         'pregunta' + index,
         decodeHtml(item.correct_answer),
         false,
         decodeHtml(item.question),
         decodeHtml(item.category),
      ]);
   })


   let puntuacion = 0;
   let marcador = document.getElementById("marcadorEj10");
   const formQ = document.getElementById("formEj10")

   // const arrayQ =[
   //    ['btn1', 'pregunta1', 'Respuesta 1', false, 'Pregunta 1'],
   //    ['btn2', 'pregunta2', 'Respuesta 2', false, 'Pregunta 2'], 
   //    ['btn3', 'pregunta3', 'Respuesta 3', false, 'Pregunta 3'],
   //    ['btn4', 'pregunta4', 'Respuesta 4', false, 'Pregunta 4'],
   // ];

   // <label for="pregunta1">Pregunta 2</label>
   // <input type="text" name="pregunta2" id="pregunta2">
   // <input type="button" value="Enviar" id="btn2">


   arrayQ.forEach((item, index) => {
      console.table({ puntuacion, item });

      let div = document.createElement("div")
      let label = document.createElement("label")
      let inputq = document.createElement("input")
      let inputbtn = document.createElement("input")
      let categoryName = document.createElement("h4")

      label.setAttribute("for", item[1]);
      inputq.setAttribute("type", "text");
      inputbtn.setAttribute("type", "button");
      inputbtn.setAttribute("value", "Enviar")
      inputbtn.setAttribute("title", item[2])


      div.style.padding = "10px"

      label.textContent = item[4];
      label.style.display = "block";
      label.style.padding = "10px";

      let category = item[5];
      categoryName.textContent = category;

      categories.forEach((categoryI) => {
         if (category.includes(categoryI[0])) {
            div.style.backgroundColor = categoryI[1];
            div.style.border = '5px solid ' + categoryI[2];


            div.appendChild(categoryName)
            div.appendChild(label)
            div.appendChild(inputq)
            div.appendChild(inputbtn)


            formQ.appendChild(div)

            inputbtn.addEventListener("click", () => {
               if (item[3] === false) {
                  if (inputq.value == item[2]) {
                     puntuacion++;
                     console.log(puntuacion);
                  } else {
                     puntuacion--;
                     console.log(puntuacion);
                  }
                  item[3] = true;
                  marcador.textContent = puntuacion;
               }
            })

         }
      })
   })

   if (puntuacion == amount) {
      marcador.textContent = "Maxima puntuación, vuelva a empezar"
      marcador.textContent = 0
   } else {
      marcador.textContent = puntuacion;
   }
   //marcador.textContent = puntuacion;
   console.log(puntuacion);
   console.log(typeof (marcador.textContent))
}








// document.getElementById("btn1").addEventListener("click", () => {
//    if(!preg1){
//       if (document.getElementById("pregunta1")?.value == "Respuesta 1") {
//          puntuacion++;
//          console.log(puntuacion);
//       } else {
//          puntuacion--;
//          console.log(puntuacion);
//       }
//       preg1 = true;
//       marcador.textContent = puntuacion;
//    }
// })
// document.getElementById("btn2").addEventListener("click", () => {
//    if (document.getElementById("pregunta2")?.value == "Respuesta 2") {
//       puntuacion++;
//       console.log(puntuacion);
//    } else {
//       puntuacion--;
//       console.log(puntuacion);
//    }
//    marcador.textContent = puntuacion;
// })
// document.getElementById("btn3").addEventListener("click", () => {
//    if (document.getElementById("pregunta3")?.value == "Respuesta 3") {
//       puntuacion++;
//       console.log(puntuacion);
//    } else {
//       puntuacion--;
//       console.log(puntuacion);
//    }
//    marcador.textContent = puntuacion;
// })

