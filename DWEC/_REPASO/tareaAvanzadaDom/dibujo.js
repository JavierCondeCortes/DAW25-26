//generacion de tablero
let zona = document.getElementById('zonadibujo')
let tablero = document.createElement("table");
tablero.id='tablerodibujo';
zona.append(tablero);
for(let i=0;i<30;i++){
    let fila = document.createElement("tr");
    tablero.append(fila);
    for(let j=0;j<30;j++){
        let columna = document.createElement("td");
        fila.append(columna);
        columna.style.height="10px";
        columna.style.width="10px";
        columna.style.border="1px solid black";
    }
}

//seleccion de pincel
let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let color3 = document.getElementsByClassName("color3")[0];
let color4 = document.getElementsByClassName("color4")[0];
let color5 = document.getElementsByClassName("color5")[0];
let color6 = document.getElementsByClassName("color6")[0];

let pincel = [color1,color2,color3,color4,color5,color6];

pincel.forEach(color => {
    color.addEventListener("click",function(){
        pincel.forEach(colorDes =>{
            colorDes.classList.remove("seleccionado");
        })
        color.classList.add("seleccionado");
        colorPaleta = color.className.split(" ");
    })
});


//activar pincel
let estadoPincel = false;

tablero.addEventListener("click",function(){
    if(estadoPincel===false){
        console.log("true")
        estadoPincel=true;
    }else{
        console.log("falso")
        estadoPincel=false;
    }
})
setInterval(variableEstado,100);

function variableEstado(){
    let estados = document.getElementById("pincel");
    if(estadoPincel===false){
        estados.textContent = "el estado del pincel es: desactivado";
    }else{
        estados.textContent = "el estado del pincel es: activado";
    }
}

//pintar en lienzo
let casilla = document.querySelectorAll("#tablerodibujo td");

casilla.forEach((casilla)=>{
    casilla.addEventListener("mouseover",function(){
        if(estadoPincel===true){
            casilla.classList.add(colorPaleta[0]);
        }
    })

})
