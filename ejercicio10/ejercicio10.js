// EJERCICIO 10: 
// Se cuenta con la siguiente información: 
// • Las edades de 5 estudiantes del turno mañana. 
// • Las edades de 6 estudiantes del turno tarde. 
// • Las edades de 11 estudiantes del turno noche. 
// Nota: Las edades de cada estudiante se deberán ingresar por la web. 
// Lo que queremos devolver:
// • Obtener el promedio de las edades de cada turno (tres promedios).
// • Imprimir dichos promedios (promedio de cada turno).
// • Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
// promedio de edades mayor.

function entradas(turno, cantidad, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Edad estudiante ${i + 1}`;
        input.id = `${turno}_${i}`;
        input.min = 0;
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement('br'));
    }
}

entradas('manana', 5, 'entradasManana');
entradas('tarde', 6, 'entradasTarde');
entradas('noche', 11, 'entradasNoche');

function calcularPromedios() {
    function obtenerEdades(turno, cantidad) {
        let edades = [];
        for (let i = 0; i < cantidad; i++) {
            const edad = parseInt(document.getElementById(`${turno}_${i}`).value);
            if (isNaN(edad) || edad < 0) {
                alert(`Debes ingresar una edad valida para ${turno} estudiante ${i + 1}`);
                return null;
            }
            edades.push(edad);
        }
        return edades;
    }

    function calcularPromedio(edades) {
        const suma = edades.reduce((acc, curr) => acc + curr, 0);
        return (suma / edades.length).toFixed(2);
    }

    const edadesManana = obtenerEdades('manana', 5);
    const edadesTarde = obtenerEdades('tarde', 6);
    const edadesNoche = obtenerEdades('noche', 11);

    if (!edadesManana || !edadesTarde || !edadesNoche) return;

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoMayor = '';
    if (mayorPromedio == promedioManana) {
        turnoMayor = 'Mañana';
    } else if (mayorPromedio == promedioTarde) {
        turnoMayor = 'Tarde';
    } else {
        turnoMayor = 'Noche';
    }

    const resultado = `
        Promedio del turno de la mañana: ${promedioManana}<br>
        Promedio del turno de la tarde: ${promedioTarde}<br>
        Promedio del turno de la noche: ${promedioNoche}<br>
        <br>El turno con mayor promedio es: ${turnoMayor} (${mayorPromedio})
    `;
    document.getElementById('resultado').innerHTML = resultado;
}