// EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
// Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
// aumento. Deberá demostrar los datos del empleado y el aumento salarial.

function calcularAumento(nombre, salario, categoria) {
    let aumento;
    switch (categoria) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.3;
            break;
        case 'C':
            aumento = salario * 0.1;
            break;
        case 'D':
            aumento = salario * 0.2; 
            break;
        default:
            console.log("No existe esa categoria pana!");
            return;
    }
    
    const nuevoSalario = salario + aumento;
    console.log(`Nombre: ${nombre}`);
    console.log(`Salario Actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Nuevo Salario: $${nuevoSalario.toFixed(2)}`);
}

calcularAumento("Raul Elias", 1500, 'D');