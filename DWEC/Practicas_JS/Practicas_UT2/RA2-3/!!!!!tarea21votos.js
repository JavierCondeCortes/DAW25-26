let sedes = ["","Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];
let partidos = ["Puede que Villaconejos","Obreros de Villaconejos","Villaconejos por el Si","Union Prorgreso y villanonejos"];
let nVotos = sedes.length-1*partidos.length;
// let posicion = (lugares,participantes) => for(let i=0); 
let table = [];

for(let i=0; i<sedes.length; i++){
    table.push(sedes);
}

console.table(table);

//recuento de votos por partidos de forma ordenada, con short y su funcioncita
