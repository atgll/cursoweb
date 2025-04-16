import { articulosver } from "./articulos.js";

//iniciar la pagina
window.addEventListener('load', (evento)=>{
   articulosver(1, "articulos_recientes");
   articulosver(2, "articulos_outlet");
})