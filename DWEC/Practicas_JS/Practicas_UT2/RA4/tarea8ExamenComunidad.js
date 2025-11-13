
//declarar arrays
let CyL = ["Valladolid","Burgos","León","Palencia"];
let Val = ["Valencia","Alicante"];
let And = ["Sevilla","Córdoba","Almería"];

//intentar recorrer en bucle
function recorrido (comunidad){ 
    for(let i=0; i<comunidad.length; i++){
        console.log(comunidad[i]);
    }
}

//recorrer en bucle filtrado
function recorridoFiltro (comunidad){
    for(let i=0; i<comunidad.length; i++){
        if(comunidad[i].startsWith("V") | comunidad[i].startsWith("C")){
            console.log(comunidad[i]);
        }
    }
}

// console.log(recorrido(CyL));
console.log(recorridoFiltro(CyL));
