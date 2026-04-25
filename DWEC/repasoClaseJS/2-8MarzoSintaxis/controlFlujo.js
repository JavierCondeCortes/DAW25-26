//control de flujo

let verificacion = true;
let number = 2;
let salida = 0;

if (verificacion) {
    console.log("mi bombo if");
}

while (verificacion) {
    if (salida == 2){
        break;
    }
    salida++;
    console.log("mi bombo while");
}
do {
    console.log("mi bombo do");
    verificacion=false;
} while (verificacion);

switch (verificacion) {
    case true:
        console.log("mi bombo sw true");
        break;
    case false:
        console.log("mi bombo sw false");
        break;
}

//true es para evaluar rangos de valor o comparaciones
switch (true) {
    case number > 1 && number < 3:
        console.log("verificacion de datos: mi bombo");
        break;
    default:
        console.log("no hay datos correspondientes");
        break;
}

