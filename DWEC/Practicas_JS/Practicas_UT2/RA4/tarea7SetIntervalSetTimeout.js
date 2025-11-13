//crea un tiempo de retardo para que ejecute la funcion
setTimeout(() => console.log("holas"),1000)

//hace un bucle que repite cada tiempo definido
setInterval(function (){
        console.log(Math.random()*10);
},3000);

//podemos crear un intervalo y despues de ello podemos eliminarlo con clearInterval
let contador = 0;
const id = setInterval(function(){
    console.log(Math.random()*10);
    if (contador++ === 5){
        clearInterval(id);
    }
},3000)