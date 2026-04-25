//funciones matematicas

let num1 = 9;
let num2 = 5.5;
let listaNum = [1,23,4,5,7,4,65,8];


console.log("-----MATH-----");

console.log("\n---MathMax---");
console.log(Math.max(1,2,3,4,6));
console.log(Math.max(...listaNum));

console.log("\n---MathMin---");
console.log(Math.min(1,2,3,4,6));
console.log(Math.min(...listaNum));

console.log("\n---MathPow---");
console.log(Math.pow(num1,listaNum[2]));

console.log("\n---MathFloor---");
console.log(Math.floor(num2));

console.log("\n---MathRound---");
console.log(Math.round(num2));

console.log("\n---MathRamdom---");
let numAle = (Math.random()*100)+1; //del 1 al 100
console.log(numAle);
console.log(" - con floor")
console.log(Math.floor(numAle));
