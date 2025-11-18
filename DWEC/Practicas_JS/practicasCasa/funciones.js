//anonimas
let hola = function () {
    console.log("hola");
}
hola();

//no anonimas (comunes)
function holas() {
    console.log('holas');
}
holas();

//funcion flecha
let holaFlecha = () => console.log('holaFlecha');
holaFlecha();

//funciones valores por defecto
let nombreCompleto = function (nombre = "carlos", apellido = "sainz") { console.log(nombre + " " + apellido) }
nombreCompleto() //carlos sainz
nombreCompleto('Antonio', 'Lobato') //Antonio Lobato

//funciones con rest
let rest = (...num) => { let result = 0; for (const a of num) { result += a }; return result; }
console.log(rest(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

//funciones de repeticion
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
arrobjetos = [
    { nombre: "paco", apellido: "jimenez" },
    { nombre: "paco2", apellido: "jimenez2" },
    { nombre: "paco3", apellido: "jimenez3" },
]

arr.forEach(num => {
    console.log(num)
});

arrobjetos.forEach(persona => {
    console.log(persona.apellido)
});
// jimenez
// jimenez2
// jimenez3

console.log(arr.map(n => n + 1)); //[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(arr.reduce(ac => ac)) //1
console.log(arr.reduce((ac, n) => ac + n)) //66
console.log(arr.reduce((ac, n, i) => ac + n + i)) //121
console.log(arr.reduce((ac, n, i, a) => ac + n + i + a[2])) //151
console.log(arr.reduce((ac, n) => ac + n, 100)) //151


console.log(arr.filter(n => n > 5)) //(6) [6, 7, 8, 9, 10, 11]
console.log(arr.every(n => n > 5)) //false
console.log(arr.some(n => n > 5)) //true
console.log(arr.find(n => n === 4)) //4
console.log(arr.findIndex(n => n === 4)) //3


let frase = "los pepinillos estan mu ricos aunque no me gusten para nada";
let resultado = frase.split(" ")
    .filter(palabra => palabra[0] === 'p')
    .map(palabra => palabra.toLocaleUpperCase());

console.log(resultado);

const frase2 = frase.split(' ')
    .map(x => x.length)
    .filter(x => x <= 3)
    .reduce((ac, x) => ac + x);
console.log(frase2);  // 9
