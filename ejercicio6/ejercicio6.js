// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
// en cuenta lo siguiente: 
// Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
// descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
// es Puerto el Triunfo el descuento será del 15%.
function calcularDescuentoViaje(origen, destino) {
  let descuento = 0; // 
  let mensaje = `Para un viaje de ${origen} a ${destino}: `; // 

  if (origen === 'palma') { 
    switch (destino) {
      case 'la costa del sol':
        descuento = 5; 
        mensaje = mensaje + `El descuento es del ${descuento}%.`;
        break;
      case 'panchimalco':
        descuento = 10; 
        mensaje = mensaje + `El descuento es del ${descuento}%.`;
        break;
      case 'puerto el triunfo':
        descuento = 15; 
        mensaje = mensaje + `El descuento es del ${descuento}%.`;
        break;
      default:
        mensaje = mensaje + "No hay descuento disponible para este destino desde Palma!!";
    }
  } else {
    mensaje = mensaje + "No hay descuentos disponibles desde este origen!!!";
  }

  return mensaje;
}


console.log(calcularDescuentoViaje("palma", "la costa del sol"));
console.log(calcularDescuentoViaje("palma", "panchimalco")); 
console.log(calcularDescuentoViaje("palma", "puerto el triunfo")); 
console.log(calcularDescuentoViaje("palma", "santa ana"));
console.log(calcularDescuentoViaje("madrid", "la Costa del sol"));