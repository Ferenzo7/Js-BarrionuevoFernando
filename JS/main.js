// Array de destinos, cada destino es un objeto con su nombre y precio
const destinos = [
    { nombre: "españa", precio: 600 },
    { nombre: "rusia", precio: 400 },
    { nombre: "inglaterra", precio: 800 },
    { nombre: "portugal", precio: 750 }
];

// Guarda los destinos en localStorage
localStorage.setItem("destinos", JSON.stringify(destinos));

// Función para calcula el valor final con descuento
function valorFinal(precio) {
    const valorDescuento = precio * 30 / 100;
    const valorTotal = precio - valorDescuento;
    return valorTotal;
}

// Evento para cuando el usuario hace clic en el botón de "calcular precio"
document.getElementById("calcular").addEventListener("click", function () {
    const destinoInput = document.getElementById("destino").value.toLowerCase();

    // Recupera los destinos de localStorage
    const destinosGuardados = JSON.parse(localStorage.getItem("destinos"));

    // Busca el destino en el array
    const destinoSeleccionado = destinosGuardados.find(d => d.nombre === destinoInput);

    const resultadoDiv = document.getElementById("resultado");

    if (destinoSeleccionado) {
        const precioFinal = valorFinal(destinoSeleccionado.precio);
        resultadoDiv.textContent = `Su destino es: ${destinoInput}. El precio del vuelo con descuento es: $${precioFinal}`;

        // Guardar el precio final en localStorage con el nombre del destino como clave
        localStorage.setItem(destinoInput, precioFinal);

    } else {
        resultadoDiv.textContent = "El país ingresado no es válido";
    }
});
