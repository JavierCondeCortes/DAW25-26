let arr = [1, 2, 3, 4, "Luis", "Maria", 5.5];
// Foreach
console.log("");
console.log("Foreach:");
arr.forEach((valor, clave) => {
    console.log(clave + " - " + valor); 
});

// Map
console.log("");
console.log("Map:");
let arrTemp = arr.map( valor => {
    return valor + 1;
});
console.log(arrTemp);

// Reduce
console.log("");
console.log("Reduce:");
let arrReduce = [10, 20, 30];
console.log(arrReduce.reduce(ac => {ac; console.log(ac);}));        // 10   Devuelve el primer elemento
console.log(arrReduce.reduce((ac, n) => ac + n));                   // 60   Devuelve la suma del elemento anterior con el nuevo
console.log(arrReduce.reduce((ac, n, i) => ac + n + i));            // 63   Devuelve la suma del elemento anterior con el nuevo y el indice del nuevo
console.log(arrReduce.reduce((ac, n, i, a) => ac + n + i + a[2]));  // 123  Devuelve la suma del elemento anterior con el nuevo, el indice del nuevo y 
                                                                    //      el tercer elemento del array = 30
console.log(arrReduce.reduce((ac, n) => ac + n, 100));              // 160  Devuelve la suma del elemento anterior con el nuevo empezando desde 100
// Si no se especifica donde empezar coge como valor inicial el primero del array

// ReduceRight
console.log("");
console.log("Reduce Right:");
result = arr.reduceRight(valor => {
    return valor;
});
console.log(result);

// Filter
console.log("");
console.log("Filter:");
let arrNumb = arr.filter((valor) => typeof valor === "number");
console.log(arrNumb);

// Every
console.log("");
console.log("Every:");
console.log(arr.every(valor => typeof valor === "number"));

// Some
console.log("");
console.log("Some:");
console.log(arr.some(valor => typeof valor === "number"));

// Find
console.log("");
console.log("Find:");
console.log(arr.find(valor => valor == "Pepe"));

// FindIndex
console.log("");
console.log("Find Index:");
console.log(arr.findIndex(valor => valor > 2));

