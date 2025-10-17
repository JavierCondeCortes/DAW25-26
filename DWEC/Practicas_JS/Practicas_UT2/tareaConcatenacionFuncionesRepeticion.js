let frase = "no luce la luna sin traérmela en sueños";

console.log("Ejercicio 1:");

let palabras = frase.split(" ")
    .filter((palabra) => palabra.startsWith("l"))
    .map((palabra) => palabra.toUpperCase());

console.log(palabras);

console.log("");

console.log("Ejercicio 2:");

let suma = frase.split(" ")
    .filter((palabra) => palabra.length <3)
    .reduce((acc,palabraFiltrada) => acc+palabraFiltrada.length,0);

console.log(suma);

console.log("");

// Devolver array con los elementos * 3 y quitando los que no son divisibles por 4
console.log("Ejercicio f1:");
let a = [1, 2, 3, 4];

let f1 = () => a.map((valor) => (valor * 3))
    .filter((valor) => valor%4 != 0);
console.log(f1());  


// f2: Imprir los elementos impares
console.log("Ejercicio f2:");

let f2 = () => a.filter((valor) => valor%2 !=0).forEach((valor) => console.log(valor) );
f2();


// f3: Devuelve la suma de todos los elementos con indice par

let f3 = () =>a.filter((valor,indice) => indice%2 == 0 ).reduce((acc,n) => acc+n);
console.log(f3());


//calculadora lenguaje_54.js - Ejercicio: Invocar un único método llamado calcular para realizar las 4 operaciones aritméticas básica

let arr_numeros = [1,2,3,43,54,56,67,8,75,3,4,35,1];
let operadorValue = "+";

let calculadora = (operador,numeros) => { // rest funcuina con valores separados y no con valores dentro de array
    
    switch(operador){
        case "+":
            return numeros.reduce((acc,n) => acc+n);
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            break;
        default:
            break;
    }
};

console.log(calculadora(operadorValue, arr_numeros));

