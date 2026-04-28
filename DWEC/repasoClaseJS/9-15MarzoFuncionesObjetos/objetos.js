//objetos
let persona = {
    nombre: "ana",
    edad: 19,
    pais:{
        nombre: "españa",
        continente: "europeo"
    }
}

//funciones constructoras
function persona1(nombre,edad,pais = "españa"){
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
}

let yo = new persona1("yo",19);
let tu = new persona1("tu",25,"hungria");

console.log(yo);
console.log(yo.pais);
console.log(tu);


