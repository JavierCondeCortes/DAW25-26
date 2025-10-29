const ROMANOS = ["I", "V", "X", "L", "C"];

let numAleatorios = 0;

for (let i = 0; i < 100; i++) {
    numAleatorios = Math.floor(Math.random(0, 2024));
}


let añoSiglo = ((numAleatorios) => numAleatorios / 100 +1);

console.log(añoSiglo(numAleatorios))
console.log( numAleatorios)