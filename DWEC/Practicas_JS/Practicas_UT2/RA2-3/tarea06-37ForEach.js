let tabla = [[1,2,3],[4,5,6],[7,8,9,10],['a','b','c']]

tabla.forEach(function(element){ //la tabla es recorrida por una funcion
    element.forEach(function(subelement){ //element es recorrido por una funcion
        console.log(subelement); //se imprime los subelementos de las arrays nombradas element
    })
});


tabla.forEach(recorrido(i,j))
//sin terminar
function recorrido(i,j){
    for(let i=0;i<tabla.length;i++){
        for(let j=0;j<tabla[j].length;j++){
            console.log(tabla([i][j]));
        }
    }
}


