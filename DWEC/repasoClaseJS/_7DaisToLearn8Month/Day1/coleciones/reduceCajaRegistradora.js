const carrito = [
    { articulo: "Laptop", precio: 800, cantidad: 1 },
    { articulo: "Funda", precio: 20, cantidad: 2 },
    { articulo: "Cargador", precio: 35, cantidad: 1 }
];
                                //acumulador,valores
let precioTotal = carrito.reduce((acc,{precio,cantidad})=>{
    return acc+(precio*cantidad);
},0)
console.log(precioTotal)

let precioTotalV2 = carrito.reduce((acc,{precio,cantidad})=> acc+(precio*cantidad),0)

console.log(precioTotalV2)