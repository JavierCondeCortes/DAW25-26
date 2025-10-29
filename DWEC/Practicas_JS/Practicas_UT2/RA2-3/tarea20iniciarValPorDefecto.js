let arrayGrande = [];
arrayGrande.fill(0,49);

let arraySemana = ["Lunes","Martes","Miercoles","Jueves",["Viernes","Sabado"],"Domingo"];

let valorExtraido = delete arraySemana[1]; //le elimina pero mantiene la cantidad de elementos
console.log(arraySemana); //(7) ['Lunes', …, 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
console.log(valorExtraido); //true

let valoresDestruidos = arraySemana.splice(2,2); //elimina la cantidad de elementos desde la posiocion indicada ajustando el espacio (pos,cantidad)
console.table(arraySemana); //(5) ['Lunes', …, 'Viernes', 'Sabado', 'Domingo']
console.log(valoresDestruidos); //(2) ['Miercoles', 'Jueves']

let diaEmininado= arraySemana.pop(); //elimina el ultimo y ajusta el espacio
console.log(arraySemana); //(4) ['Lunes', …, 'Viernes', 'Sabado']
console.log(diaEmininado); // Domingo

