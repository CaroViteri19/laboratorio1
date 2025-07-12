let contraseña = prompt("Introduce la contraseña:");


while (contraseña !== "123467") {
  contraseña = prompt("Contraseña incorrecta. Intenta de nuevo:");
}

console.log("Contraseña correcta");
