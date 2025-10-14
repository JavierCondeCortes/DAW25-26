//FUNCION NOMBRADA, cual se produce hoisting
console.log(hola("paco"));

function hola(nombre){
    return `hola ${nombre}`;
}

//FUNCION ANONIMA, no se produce hoisting

//funcion dentro de una variable
// console.log(alo("paquirri")); //<-- marca error "Cannot access 'alo' before initialization"

let alo = function(name){
    return `alo ${name}`;
}

console.log(alo("paquirri"));

//funcion dentro de otra funcion

function alos(alo){
    alo();
};

console.log(alos)

//funcion como parametro

// hola(function(name){
//     hola("pacos")
// })


//FUNCIONES PARAMETROS
console.log("FUNCIONES PARAMETROS")

function f1(nombre,edad){
    console.log(`${nombre},${edad}`);
}

f1('pepe');
f1('pepe',20,"calle");

//parametro utilizado "arguments" (se usa menos)
console.log("FUNCION ARGUMENTO")

function f2(nombre,edad){
    console.log(`${arguments[0]} - ${arguments[1]}`);
}

f2('pepe');
f2('pepe',20,"calle");

//parametro con valores predefinidas
console.log("VALORES PREDEFINIDOS");

function f3(nombre = "paquirri",edad = "9"){
    console.log(`${nombre},${edad}`);
}

f3('pepe');
f3();

//FUNCIONES CON REST
console.log("FUNCIONES CON REST");

function apellidos(nombre,...apellido){
    let resultado = nombre;
    for(const i in apellido){
        resultado+=" "+apellido[i];
    }
    return console.log(resultado);
}

apellidos("javier","conde","cortes","castaño","garcia","simon","moro","san rufino");
apellidos("juan");
apellidos("pablo","panero");

//FUNCIONES SPREAD OPERATOR
console.log("SPREAD OPERATOR");

console.log("AHORRANDO BUCLE");
let values =[1,2,3];
let morevalues = [4,5];
values.push(...morevalues);
console.log (values);

console.log("SUMA MEDIANTE SPREAD");

function suma(a,b,c=0){
    return a + b + c;
}

let array1=[1,2,3];
console.log(suma(...array1));
let array2=[1,2,3,4];
console.log(suma(...array2));
let array3=[1,2];
console.log(suma(...array3));       

//cuando se realiza un funcion con argumento lo que refiere es que argument coge el valor con lo que se llama y no con un valor de la propia funcion


//FUNCIONES FLECHA
console.log("FUNCIONES FLECHA");
let saludo1 = function () {
    return "hola";
}

    //es igual a

let saludo2 = () => "hola";

console.log(saludo1());
console.log(saludo2());

//funcion flecha en mas de una linea

let saludo3 = function(nombre,apellido) {
    return `hola ${nombre} ${apellido}`;
}

    // es igual a

let saludo4 = (nombre,apellido) => {
    return `hola ${nombre} ${apellido}`;
}

console.log(saludo3("sergio","gonzalez"))
console.log(saludo4("javier","conde"));