let destino = prompt("Ingrese su destino de vuelo o ingrese 'salir' en caso de que las promociones vigentes no sean de su interés");
let precio;

// Array de destinos, cada destino es un objeto con su nombre y precio
const destinos = [
    { nombre: "españa", precio: 600 },
    { nombre: "rusia", precio: 400 },
    { nombre: "inglaterra", precio: 800 },
    { nombre: "portugal", precio: 750 }
];

while (destino !== "salir") {
    // Buscamos el destino en el array
    const destinoSeleccionado = destinos.find(d => d.nombre === destino.toLowerCase());

    if (destinoSeleccionado) {
        precio = destinoSeleccionado.precio;
        console.log("Su destino es: " + destino);
        console.log("El precio del vuelo con descuento es: $" + valorFinal(precio));

    } else {
        alert("El país ingresado no es válido");
    }

    // Pedimos el destino de nuevo
    destino = prompt("Seleccione otro destino de vuelo o 'salir' para terminar");
}

// Función que calcula el valor final con descuento
function valorFinal(precio) {
    const valorDescuento = precio * 30 / 100;
    const valorTotal = precio - valorDescuento;
    return valorTotal;
}