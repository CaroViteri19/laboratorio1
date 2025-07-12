const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("Primer número:", numero1);
console.log("Segundo número:", numero2);

let respuesta = numero1 + numero2;
console.log("la suma de los dos numeros es: ", respuesta);

