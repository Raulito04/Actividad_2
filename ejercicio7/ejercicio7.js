// EJERCICIO 7: 
// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados que son pares.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function analizarEnteros() {
  let negativos = 0;
  let positivos = 0;
  let multiplosDe15 = 0;
  let sumarPares = 0;
  let contador = 1;

  console.log("ingresa 10 valores enteros:");

  const pedirNumero = () => {
    if (contador > 10) {
      console.log(`\nResultados:`);
      console.log(`valores negativos: ${negativos}`);
      console.log(`valores positivos: ${positivos}`);
      console.log(`multiplos de 15: ${multiplosDe15}`);
      console.log(`suma de numeros pares: ${sumarPares}`);
      rl.close();   
      return;
    }

    rl.question(`Ingresa el valor ${contador} de 10: `, (input) => {
      const numero = parseInt(input);

      if (isNaN(numero)) {
        console.log("Ingresa un numero que sea valido!");
        pedirNumero(); 
      } else {
        if (numero < 0) {
          negativos++;
        } else if (numero > 0) {
          positivos++;
        }

        if (numero % 15 === 0) {
          multiplosDe15++;
        }

        if (numero % 2 === 0) {
          sumarPares += numero;
        }

        contador++;
        pedirNumero(); 
      }
    });
  };

  pedirNumero();
}

analizarEnteros();