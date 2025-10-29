let empleado = {
    nombre: "ana",
    edad: 20,
    "tranajador temporal": true,
    domicilio:{
        calle: "mayor,3",
        poblacion: "valladolid",
    },
};

empleado.sexo="femenino"; //CREAR ATRIBUTOS
console.log(empleado.sexo); // femenino
console.log(empleado.nombre); // ana
console.log(empleado["tranajador temporal"]); // true
empleado["tranajador temporal"] = false; //ASIGNAR OTROS VALORES
console.log(empleado["tranajador temporal"]); // false
console.log(empleado.domicilio.calle); // mayor,3
console.log(empleado.edad); //20
delete(empleado.edad);  //DELETE
console.log(empleado.edad); //undefined

console.log(empleado.hola); //undefined //intenta buscar dentro del objeto alguo que no hay, no lo crea

console.log("----CREACION DE OBJETOS----")

const propiedad1 = "edad";
const valor = 20;
const propiedad2 = "trabajador";
const persona = {nombre:"Pepe",[propiedad1]:valor, [propiedad2]: true};

console.log(persona);

const propiedades = ["nombre", "edad", "trabajador"];
const valores = ["luis", 43, true];
const persona2 = {};
for (const key in propiedades){
    persona2[propiedades[key]] = valores[key];
}

console.log(persona2);