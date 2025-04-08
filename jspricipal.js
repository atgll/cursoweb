let body = document.body
let ulLista1 = document.getElementById('lista1')
let aLista1 = ulLista1.getElementsByTagName('a')
let button = document.querySelector("#btnTheme")
let a = document.querySelectorAll('a')


function setDark() {
localStorage.setItem("darkMode", true);
   body.classList.remove('body-light');
   body.classList.add('body-dark');
   button.classList.add('button-dark');
   button.classList.remove('button-light');
   button.textContent = "Dark";
   for (let i = 0; i < a.length; i++) {
      a[i].classList.add('a-dark')
      a[i].classList.remove('a-light')
      a[i].classList.add('a-dark:hover')
      a[i].classList.remove('a-light:hover')
   }
}

function setLight() {
   localStorage.setItem("darkMode", false);
   body.classList.remove('body-dark');
   body.classList.add('body-light');
   button.classList.remove('button-dark');
   button.classList.add('button-light');
   button.textContent = "Light";
   for (let i = 0; i < a.length; i++) {
      a[i].classList.remove('a-dark')
      a[i].classList.add('a-light')
      a[i].classList.remove('a-dark:hover')
      a[i].classList.add('a-light:hover')
   }
}

function theme() {
   if (body.classList.contains("body-dark")) {
      setLight();
   } else {
      setDark();
   }
}

window.onload = function() {
   let darkMode = localStorage.getItem("darkMode");
   if (darkMode && darkMode == "true") {
      setDark();
   } else {
      setLight();
   }
}


button.addEventListener('click', theme);