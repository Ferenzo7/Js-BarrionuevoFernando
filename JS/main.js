const destino = prompt("Ingrese su destino de vuelo");
let precio ;


const españa = 600;
const rusia = 400;
const inglaterra = 800;
const portugal = 750;

if (destino === "españa"){
    precio = españa
}
else if (destino === "rusia"){
    precio = rusia
}
else if (destino === "inglaterra"){
    precio = inglaterra
}
else if (destino === "portugal"){
    precio = portugal
}
else {
    alert("El pais ingresado no es valido")
}

function valorFinal (){
    const valorDescuento = precio * 30 / 100

    const valorTotal = precio - valorDescuento

    return valorTotal;
}

valorFinal()

console.log(valorTotal);