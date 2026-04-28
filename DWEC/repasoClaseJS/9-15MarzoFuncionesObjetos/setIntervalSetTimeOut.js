//setInterval  (tiempo de espera) ejecuta en bucle
//setTimeout (tiempo de espera) ejecuta 1 vez

let contador = 0;

// setInterval(() => {
//     console.log("tick", contador++);
// }, 500)


function contadorFuncion(){
    console.log(contador++);
}

console.log("espera 3 segundos");

setTimeout(() => {
    console.log("Iniciando intervalo...");
    setInterval(contadorFuncion, 500);
}, 3000);