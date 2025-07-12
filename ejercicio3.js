const prompt = require('prompt-sync')();

let edad = prompt("¿Cuál es tu edad? ");
edad = Number(edad);

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}
