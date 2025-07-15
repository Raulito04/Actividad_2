// EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
// Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
// coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
// el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
// aplicara en base a lo que selecciono el usuario.

function calcularDescuentoCoche() {
  const selectCoche = document.getElementById('coche');
  const cocheSeleccionado = selectCoche.value;
  const resultado = document.getElementById('resultadoDescuento');
 
  console.log(cocheSeleccionado);
  let mensaje = "";
  let descuento = 0; // 

  switch (cocheSeleccionado) {
    case 'FORD FIESTA':
      descuento = 5;
      mensaje = `Has seleccionado ${cocheSeleccionado} y se aplicara un ${descuento}% de descuento.`; // 
      break;
    case 'FORD FOCUS':
      descuento = 10;
      mensaje = `Has seleccionado ${cocheSeleccionado} y se aplicara un ${descuento}% de descuento.`; // 
      break;
    case 'FORD ESCAPE':
      descuento = 20;
      mensaje = `Has seleccionado ${cocheSeleccionado} y se aplicara un ${descuento}% de descuento.`; // 
      break;
    default:
      mensaje = "Por favor, selecciona un coche para ver el descuento."; // 
  }

  resultado.textContent = mensaje;
}

