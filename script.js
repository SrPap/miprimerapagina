
//FORMULARIO//
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

//f FORMULARIO//






//alert("Hola este es mi Javascript");

//let nombre = "Eros";

//var nombre1 = "Eros";

//const nombre2 = "Eros";

//console .log (nombre);
//console .log (nombre1);
//console .log (nombre2);

//let contenidoTitulo = "Mis Trabajos";

//let titulo = document.querySelector(".titulotrabajos")
//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES//
//let textoTitulo = titulo.innerText;
//console.log (textoTitulo);

//if (textoTitulo == "Mis Trabajos") {
//titulo.innerHTML = "Mis Experiencias";
//} else {console.log ("no se cumple");}


//let nombre1 = "Eros Rodriguez";
//let ciudad1 = "Italia xd";
//let gustos1 = "el chocolate";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto) {
//let contenido = `Mi nombre es ${nombre}, naci en ${ciudad}, pero actualmente vivo en Tumbes-Peru. Me gustan los videojuegos, ${gusto}, obtener nuevas habilidades y la programacion. Mi sueño es crear aplicaciones y software que facilite la vida de las personas y las empresas, a la vez que consigo vivir de mi pasion (la programacion).`;

//    return contenido;}

//parrafo.innerText = cambiarTexto (nombre1, ciudad1, gustos1);

