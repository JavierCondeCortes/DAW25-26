//array
let array = ["a","b","c","d","e","f","g"];

const [a,b,c,,...resto] = array;

console.log(a)
console.log(b)
console.log(c)
console.log(resto)

//objetos

let persona = {
    nombre: "ana",
    edad: 19,
    pais:{
        nombre: "españa",
        continente: "europeo"
    }
}

const {pais: {nombre,continente}} = persona;

console.log(nombre)
console.log(continente)

const alumno = {
    nombre: "Javi",
    notas: [8, 9, 10]
};

const { notas: [n1, n2, n3] } = alumno;

console.log(n2); 


//objetos en arrays

const lista = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" }
];

const [{ nombre: primero }, { nombre: segundo }] = lista;

console.log(primero); // Ana
console.log(segundo); // Luis