// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

let container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  console.log(dataArray);
  }
}



// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData

document.addEventListener('DOMContentLoaded', ()=>{
  fetch("json/data.json")
  .then(response => response.json())
  .then(data =>{console.log(data.students);
    showData(data.students);
  })
});




/*
*Intentos fallidos
const arreglo = data.json.parse(dataArray);
async function showData() {
  try {
    const dataArray = await getData();
    for (const item of dataArray) {
      container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
    }
  } catch (error) {
    console.error("Error showing data:", error);
  }
}
  fetch("json/data.json")
  .then(response => response.json())
  .then(data => showData(DATA_URL)) 
  */