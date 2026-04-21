let arreglo = [1,2,3,4,5];
let arreglo2 = [6,7,8,9,10];

console.log("\n--SIN Spread--")
console.log(arreglo);

console.log("\n--CON Spread--")
console.log(...arreglo);

console.log("\n--copia CON Spread + agregar 1 valor al final--")
let arreglo3C = [...arreglo,...arreglo2,"agregado"];

console.log(arreglo3C);

console.log("\n--copia SIN Spread--")
let arreglo3S = [];
for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i];
    arreglo3S.push(element)
}
for (let i = 0; i < arreglo2.length; i++) {
    const element = arreglo2[i];
    arreglo3S.push(element)
}
arreglo3S.push("agregado");

console.log(arreglo3S);
