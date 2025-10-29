let frase = "no luce la luna sin traérmela en sueños";

console.log("Ejercicio 1:");
let res1 = frase.split(" ")
    .filter(palabra => palabra.toLowerCase().startsWith("l"))
    .map(palabra => palabra.toUpperCase());
console.log(res1);

console.log("");

console.log("Ejercicio 2:");
let res2 = frase.split(" ")
    .filter(palabra => palabra.length < 3)
    .map(palabra => palabra.length)
    .reduce((ac, numero) => ac + numero);
console.log(res2);

console.log("");

// Devolver array con los elementos * 3 y quitando los que no son divisibles por 4
console.log("Ejercicio f1:");
let a = [1, 2, 3, 4];
let f1 = arr => {};
console.log(f1(a));


// f2: Imprir los elementos impares
// f3: Devuelve la suma de todos los elementos con indice par