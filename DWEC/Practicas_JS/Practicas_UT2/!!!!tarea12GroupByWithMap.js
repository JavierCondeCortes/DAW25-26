//INTENTAR PODER AGRUPAR MEDIANTE MAP.GROUPBY

let frutas = new Map ([
    [1,"manzana"],
    [4,"peras"],
    [2,"calabazas"],
    [3,"cerezas"],
    [5,"peras"],
    [6,"calabazas"]
]);

function callback(){
    frutas.forEach(function(id){
        let nombre = frutas.get(id);
        console.log(nombre);
    })
}


const resultado = Map.groupBy(frutas,callback)

console.log(resultado);