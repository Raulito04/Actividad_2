// EJERCICIO 8: 
// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
// por el usuario.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

rl.question('Ingrese un numero:', (numero) => {
  const num = parseInt(numero);
  if (isNaN(num)) {
    console.log('Ingresa un numero correcto! :C');
  } else {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  rl.close();
});