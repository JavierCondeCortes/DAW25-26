const tareas=
`b a
c b
d c
a z`;

let lista = tareas.trim().split(/\n+/);

console.log(organizador(lista));

function organizador(lista){
    let listaDividida = lista
    let resultados = [];

    for (const element of listaDividida) {
        const dependencia = element[0];
        const valor = element[1];
        
        if(resultados.length===0){
            // resultados.push(dependencia);
            resultados.push([valor[dependencia]]);
        }else{
            if(resultados[0]===dependencia){
                resultados.unshift(valor)
            }else{
                //crear un array por cada dependencia para poder tenerlo ordenado
                resultados.push([valor[dependencia]]);
            }
        }

    }
    return resultados;
}