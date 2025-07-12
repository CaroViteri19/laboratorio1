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
