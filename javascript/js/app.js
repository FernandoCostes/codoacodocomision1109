//alert("Hola Mundo!")/*Ventana emergente*/
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
elemento.innerHTML = "<h1 class='text-center bg-info'>" + saludar + "</h1>";
document.write("<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>"+ saludar +" </h1></div></div>");

document.write(`
<div class="container"><div class="row" id="principal">
<h1 class="text-center bg-info"> ${saludar}</h1></div></div>
`);


//let mensaje = prompt("Menu \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa Napolitana ");
/*
if(mensaje === "1"){
    elemento.innerHTML="<p>Disfurta de tus Papas!</p>";
}else if(mensaje === "2"){
    elemento.innerHTML="<p>Disfruta de tu Milanesa con fritas!</p>";
}else if(mensaje === "3"){
    elemento.innerHTML="<p>Disfruta de tu Milanesa Napolitana</p>";
}else{
    elemento.innerHTML="No es una opcion el valor ingresado";
}

switch (mensaje) {
    case "1":
        elemento.innerHTML = "<p>Disfurta de tus Papas!</p>";
        break;
    case "2":
        elemento.innerHTML = "<p>Disfruta de tu Milanesa con fritas!</p>";
        break;
    case "3":
        elemento.innerHTML = "<p>Disfruta de tu Milanesa Napolitana!</p>";
        break;
    default:
        elemento.innerHTML = "No es una opcion el valor ingresado";
        let mensaje = prompt("Menu \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa Napolitana ");
}

let num = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));

let resultado = "<p>El resultado de: " + num + " y " + num2 + " es: " + (num+num2) + "</p>";
elemento.innerHTML=resultado;
elemento.innerHTML+="Hola";
*/