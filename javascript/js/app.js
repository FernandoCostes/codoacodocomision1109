alert("Hola Mundo!")/*Ventana emergente*/
console.log("Estamos en la consola")

let nombre = "Fer Costes";/*conviene usar let en lugar de var*/
var numero = 10;
const PI = 3.1416;
let hayClases = true;/*puedo usar 1 0 en lugar de true o fasle*/
let esFeriado = false;
console.log((numero + 25) + " " + nombre)
console.log(hayClases)
console.log(5 > 3)
/*condicionales*/
if (5 > 8) {
    console.log("es correcto!")
} else {
    console.log("no es correcto!")
}
console.log((5 > 3) ? "Es correcto" : "No es correcto!") /*ternario*/
if ((hayClases == true) && (esFeriado != true)) {
    console.log("Me conecto a la videollamada!")
} else {
    console.log("No me conecto a la videollamada!")
}
if (25 < 32 || 12 > 20) {
    console.log("Se cumplió la condición")
}
let saludo = "Hola, cómo estás?"
let saludar = saludo + nombre;

let elemento = document.getElementById("principal");
// console.log(elemento)
elemento.innerHTML = "<h1 class='text-center bg-info'>"+ saludar + "</h1>";
document.write("<h1 class='text-center bg-info'>"+ "Hola" + "</h1>")

