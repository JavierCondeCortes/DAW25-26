const productos = [
    { nombre: "Teclado", precio: 25, stock: 10 },
    { nombre: "Ratón", precio: 15, stock: 0 },
    { nombre: "Monitor", precio: 200, stock: 5 },
    { nombre: "Alfombrilla", precio: 10, stock: 25 }
];

const resultado1 = productos.filter(producto => {
    return producto.stock > 0 && producto.precio < 100;
});

let filtro = productos.filter(({stock,precio})=>{
    return stock>0 && precio<100
});

