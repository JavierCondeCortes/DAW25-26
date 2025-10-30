//VALORES A NOMBRAR

function Persona (nombre,edad){
    this.nombre = nombre,
    this.edad = edad
}
const gente = new Persona("Alonso",33);
console.log(gente);

const gente1 = new Persona("Alfredo");
console.log(gente1);

//VELORES POR DEFECTO

function Marca (nombre = "predeterminado", ubicacion = "chipre"){
    this.nombre = nombre,
    this.ubicacion = ubicacion
}
const predeterminado = new Marca ();
console.log(predeterminado);

const determinado = new Marca ("bmw","alemania");
console.log(determinado);

//contructor prototipo prototype
function coche (marca,modelo){
    this.marca = marca,
    this.modelo = modelo
}

coche.prototype.visualizar = function(){
    console.log(this.marca);
};
const cocheMarca = new coche("bmw","GT2")
console.log(cocheMarca);