const elementoSeleccionado = document.getElementById("elemento");
const nivelElemento = document.getElementById("nivel");
const informacionObtenida = document.getElementById("informacion");

const imageMaiz = document.getElementById("imgMaiz");

const recetas = [cerdoAsado, PastelCerdo];

// function prueba(){
//   for(i = 0; i < recetas.length; i++)
//   recetas[elementoSeleccionado.value];
//   // console.log(recetas);
//   informacionObtenida.value = recetas[i]
// }

function prueba2(){
  if(elementoSeleccionado.value == "selecciona"){
   informacionObtenida.value = "Debes seleccionar una receta!";
  }

  else{
    informacionObtenida.value = recetas[elementoSeleccionado.value] + imageMaiz;
  }
}