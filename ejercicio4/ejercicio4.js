
// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
// calcular cual número es el mayor y devolverlo. 
const leer = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarNumeroMayor(num1, num2) {
  if (num1 > num2) {
        
    return "El numero mayor es: " + num1;
  } else if (num2 > num1) {
    return "El numero mayor es: " + num2;
  } else {
    return "Ambos numeros son iguales intenta otra vez!";
  }
}

leer.question("Ingrese el primer numero entero: ", (num1) => {
  leer.question("Ingrese el segundo numero entero: ", (num2) => {
    const numero1 = parseInt(num1);
    const numero2 = parseInt(num2);
    let resultado = encontrarNumeroMayor(numero1, numero2);
    console.log(resultado);
    leer.close();
  });
});