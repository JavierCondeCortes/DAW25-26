let frase1 = "me cago en la mismisima, la racalcada :D."
let frase2 = "Na, es broma, I LOVE U <3"

console.log("\n------CHARAT-------");
for (let i = 0; i < frase1.length; i++) {
    console.log(frase1.charAt(i));
}

console.log("\n-------CONCAT--------");
console.log(frase1.concat(" "+frase2));

console.log("\n-------ENDSWITH--------");
console.log(frase1.endsWith("."));// final de la frase / true
console.log(frase1.endsWith(".",10));//la posicion 10 / false

console.log("\n-------INCLUDES--------");
console.log(frase1.includes("l"));
console.log(frase1.includes("la mismisima"));
console.log(frase1.includes(" asd"));

console.log("\n-------INDEXOF--------");
console.log(frase1.indexOf("i"));

let indices = [];
let letra = frase1.indexOf("i");

while(letra !=-1){
    indices.push(letra);
    letra = frase1.indexOf("i",letra+1)
}
console.log(indices);

console.log("\n-------LASTINDEXOF--------");
console.log(frase1.lastIndexOf("i"));

console.log("\n-------MATCHALL--------");
const texto = "Pedidos: PROD-122, PROD-845 y PROD-900.";
const regex = /PROD-(\d+)/g; // Buscamos PROD- y capturamos los números

const coincidencias = [...texto.matchAll(regex)];

coincidencias.forEach(match => {
    console.log(`Encontrado: ${match[0]}`); // El texto completo
    console.log(`ID numérico: ${match[1]}`); // El grupo capturado (\d+)
    console.log(`Posición: ${match.index}`); // Índice de inicio
    console.log("-------------------");
});

console.log("\n-------REPEAT--------");
console.log(frase1.repeat(2));

console.log("\n-------REPLACE--------");
console.log(frase1.replace("i","u"));

console.log("\n-------REPLACEALL--------");
console.log(frase1.replaceAll("i","u"));

console.log(frase1.search("la"));

console.log("\n-------SLICE--------");
console.log(frase1.slice(0,11));

console.log("\n-------SPLIT--------");
console.log(frase1.split(" "));

console.log("\n-------STARTWITH--------");
console.log(frase1.startsWith("l")); //false
console.log(frase1.startsWith("m")); //true

console.log("\n-------SUBSTRING--------");
console.log(frase1.substring(0,11))

console.log("\n-------TOLOWERCASE--------");
console.log(frase1.toLowerCase());

console.log("\n-------TOUPPERCASE--------");
console.log(frase1.toUpperCase());

console.log("\n-------TRIM--------");
frase1trim = "     " + frase1 + "          ";
console.log(frase1trim);
console.log(frase1trim.trim());

console.log("\n-------VALUEOF(muestra el contenido)--------");
console.log(frase1.valueOf("la"));