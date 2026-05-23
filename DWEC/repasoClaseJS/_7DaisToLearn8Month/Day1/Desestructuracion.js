const alumno = {
    id: 101,
    nombre: "Alex",
    apellidos: "García Pérez",
    notas: {
        parcial1: 8.5,
        parcial2: 6.0
    },
    hobbies: ["Programar", "Ajedrez", "Ciclismo"]
};

//ej 1
// console.log(alumno.nombre + alumno.notas.parcial1 + alumno.hobbies[0]);
// Extraemos: nombre, parcial1 (renombrado) y el primer elemento del array
const { nombre, notas: { parcial1: notaExamen }, hobbies: [primerHobby] } = alumno;

console.log(nombre, notaExamen, primerHobby);

//ej 2 
//tener en cuentra que es un objeto {}, no un array []
const alumnoActualizado = {...alumno,nombre:"Alejandro",becado:true};

