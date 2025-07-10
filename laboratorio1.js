
//variables

/*let edad = 25;
let nombre = "Carolina";
let esEstudiante = true;
let direccion = null;
let telefono;

console.log(edad);                 
console.log(nombre);              
console.log(esEstudiante);
console.log(direccion);      
console.log(telefono);    
'*/

/*const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("Primer número:", numero1);
console.log("Segundo número:", numero2);

let respuesta = numero1 + numero2;
console.log("la suma de los dos numeros es: ", respuesta);

'*/
/*const prompt = require('prompt-sync')();

let edad = prompt("¿Cuál es tu edad? ");
edad = Number(edad);

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}
'*/
const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número: ");
numero = Number(numero);

if (numero > 0) {
  console.log("Es positivo");
} else if (numero < 0) {
  console.log("Es negativo");
} else {
  console.log("Es cero");
}


