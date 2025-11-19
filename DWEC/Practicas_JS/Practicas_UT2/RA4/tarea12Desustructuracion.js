const persona = {
    nombre: 'sarah',
    lugar:{
        pais: 'nigeria',
        ciudad: 'lagos',
    },
    amigas: ['anie','becky']
};

let {amigas:[primera]} = persona;
console.log(primera);


//-----------persona2-----------//


const persona2 = {
    nombre: 'pepe',
    apellidos: ['Garcia','Peréz'],
    edad: 23
}

const arr = ['lunes','martes','miercoles','jueves','viernes'];

//tener en cuenta el renombramiento de atributos
const nombreEdad = {nombre: ej1,edad: ej2} = persona2;
console.log(ej1 +" "+ ej2);

//scar elementos de un array
const luMi = [lu,,mi] = arr;
console.log(lu +" "+ mi);

//sacar apellidos de forma individual
const apellido1 = {apellidos:[ape1]} = persona2;
const apellido2 = {apellidos:[,ape2]} = persona2;
console.log(ape1 +" "+ ape2);

//sacar apellidos de forma conjunta
const apellidoCompleto = {apellidos:[primerApe,segundoApe]} = persona2;
console.log(primerApe,segundoApe);

//sacar valores mediante funcion
function verDatos({nombre = "Luis",edad = 20}){
    console.log(nombre + " -- " + edad);
}

verDatos(persona2);
verDatos({});
