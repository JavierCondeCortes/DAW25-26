//arrays

let arreglo = [0,1,2,3,8,4,5,6,7,8,11,9];

console.log("----POP----");
console.log(arreglo);
console.log(arreglo.pop());

console.log("----FIND----");
console.log(arreglo);
console.log(arreglo.find((elemento)=>elemento)>3);

console.log("----FINDINDEX----");
console.log(arreglo);
console.log(arreglo.findIndex((elemento)=>elemento==2));

console.log("----FILTER----");
console.log(arreglo);
console.log(arreglo.filter((elemento)=>elemento>3));

console.log("----FINDLAST----");
console.log(arreglo.findLast((elemento)=>elemento == 8));

console.log("----FINDINDEXLAST----");
console.log(arreglo.findLastIndex((elemento)=>elemento == 8));

console.log("----INCLUDES----");
console.log(arreglo.includes(4));

console.log("----sort----");
console.log(arreglo.sort((a,b)=>a-b));




