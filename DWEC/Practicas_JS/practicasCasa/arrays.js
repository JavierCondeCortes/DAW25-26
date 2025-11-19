let arr2 = [];
let arr = [];
console.log(arr); //[]
arr.push('pepe', 'leo', 1, 2, 4, 4, 'cinco'); //push
arr2 = arr;
console.log(arr); //(7) ['pepe', 'leo', 1, 2, 3, 4, 'cinco']
arr.reverse() //reverse
console.log(arr); //(7) ['cinco', 4, 3, 2, 1, 'leo', 'pepe']
arr.pop(); //pop
console.log(arr); //(6) ['cinco', 4, 3, 2, 1, 'leo']
arr.shift(); //shift
console.log(arr); //[4, 3, 2, 1, 'leo']
arr.splice(4, 1, 5) //splice
console.log(arr); //(5) [4, 3, 2, 1, 5]
arr.unshift(6) //unshift
console.log(arr); //(6) [6, 4, 3, 2, 1, 5]
console.log(arr.slice(2, 4)); //slice //(2) [3, 2]
arr.sort(function (a, b) { return a - b })//short
console.log(arr); //[1, 2, 3, 4, 5, 6]
console.log(arr.lastIndexOf(4)); //lastindexof //3
console.log(arr.indexOf(4)); //indexof //2
console.log(arr.join(" - ")); //join //1 - 2 - 4 - 4 - 5 - 6
console.log(arr.concat(arr2)); //concat //(12) [1, 2, 4, 4, 5, 6, 1, 2, 4, 4, 5, 6]

// ==============================
// CREACIÓN DE ARRAYS MULTIDIMENSIONALES
// ==============================

// Matriz 2x3 (2 filas, 3 columnas)
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Matriz 3x3 con strings
const tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

// ==============================
// ACCESO A ELEMENTOS
// ==============================

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(tablero[2][1]); // O

// ==============================
// MODIFICAR ELEMENTOS
// ==============================

matriz[0][1] = 99;
console.log(matriz[0]); // [1, 99, 3]

// ==============================
// RECORRER MATRIZ CON BUCLES
// ==============================

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}

// ==============================
// MATRIZ DINÁMICA: CREAR 3x3 VACÍA
// ==============================

let vacia = [];
for (let i = 0; i < 3; i++) {
    vacia[i] = [];
    for (let j = 0; j < 3; j++) {
        vacia[i][j] = 0;
    }
}
console.log(vacia); // [[0,0,0],[0,0,0],[0,0,0]]

// ==============================
// EJEMPLO: SUMAR TODOS LOS ELEMENTOS
// ==============================

let suma = 0;
for (let fila of matriz) {
    for (let valor of fila) {
        suma += valor;
    }
}
console.log("Suma total:", suma);

// ==============================
// EJEMPLO: MATRIZ DE OBJETOS
// ==============================

const personas = [
    [{ nombre: "Ana" }, { nombre: "Luis" }],
    [{ nombre: "Carlos" }, { nombre: "Marta" }]
];

console.log(personas[1][0].nombre); // Carlos
