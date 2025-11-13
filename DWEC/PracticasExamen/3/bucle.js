let tabla = [];

function recorrido(valor1, valor2) {
    for (let i = 0; i < valor1; i++) {
        tabla[i] = [];
        for (let j = 0; j < valor2; j++) {
            tabla[i][j] = "";
        }
    }
}

recorrido(3, 4);
console.table(tabla);

tabla.forEach((posicion) => console.log(posicion));
tabla.filter((posicionFiltro)=> posicionFiltro != "")
console.log(tabla);