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

console.log(persona); //{nombre: 'Pepe', edad: 20, trabajador: true}

const propiedades = ["nombre", "edad", "trabajador"];
const valores = ["luis", 43, true];
const persona2 = {};
for (const key in propiedades){
    persona2[propiedades[key]] = valores[key];
}

console.log(persona2); //{nombre: 'luis', edad: 43, trabajador: true}

console.log("----COPIAS----")

const cliente = {nombre:"angel", saldo:1000, credito:true};
for(const key in cliente){
    console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
}

console.log("nombre" in cliente);
console.log("apellido" in cliente);

console.log("--COPIA 1-- CLONA ARR");

const copia1 ={...cliente};
console.log(copia1);

cliente.saldo=100;

console.log("--COPIA 2-- CLONA ARR");

const copia2 ={ apellido:"vazquez",...cliente};
console.log(copia2);

cliente.apellido2 = "Vergel";

console.log("--COPIA 3-- ACCEDE A DIRECCION DE MEMORIA");

const copia3 = Object.assign(cliente); //ACCEDE A DIRECCION DE MEMORIA MODIFICANDO EL ORIGINAL
console.log(copia3);

cliente.edad = 59;

console.log("--COPIA 4-- ACCEDE A DIRECCION DE MEMORIA");

let copia4 = {};
Object.assign(copia4,cliente); //ACCEDE A DIRECCION DE MEMORIA MODIFICANDO EL ORIGINAL
console.log(copia4);

console.log("----ARR ORIGINAL CLIENTE----")
console.log(cliente);