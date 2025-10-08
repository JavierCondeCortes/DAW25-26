let mapaFrutas = new Map([
    ["manzanas",200],
    ["peras",300],
    ["limones",200]
])

let mapa = new Map();

//SET
mapa.set("indice", "valor");
mapa.set(1, "hola otra vez");
mapa.set(true, "porque se puede hacer esto?");

//GET
console.log(mapa.get(1)); //hola otra vez
// alert(mapa.get(1));//para web
console.log(mapa.get("indice")); //valor
// alert(mapa.get("indice"));//para web
console.log(mapa.get(true)); //porque se puede hacer esto?
// alert(mapa.get(true));//para web

console.log("FOR")
for (var [clave, valor] of mapa) {
    console.log(clave + " = " + valor);
}

console.log("FOR EACH")
let texto = "";
mapaFrutas.forEach(function(valor,key){
    texto += key + " = " + valor + "\n";
    
})
console.log(texto);


// indice = valor
// 1 = hola otra vez
// true = porque se puede hacer esto?


//SIZE
console.log(mapa.size); //3
// alert(mapa.size);// para web

//DELETE
mapa.delete(1);
console.log(mapa); //Map(2) {size: 2, indice => valor, true => porque se …cer esto?}
// alert(mapa); // para web

//HAS
console.log(mapa.has("indice"));//true
// alert(mapa.has("indice"));// para web

//VALUES
console.log(mapa.values()); //MapIterator {valor, porque se …cer esto?}
// alert(mapa.values()); // para web

//KEYS
console.log(mapa.keys()); //MapIterator {indice, true}
// alert(mapa.keys()); // para web

///ENTRIES
console.log(mapa.entries()); //MapIterator {indice => valor, true => porque se …cer esto?}
// alert(mapa.entries()); // para web


//EJEMPLO DE USO DE LAS PROPIEDADES
console.log("USO DE DE LAS PROPIEDADES")
//FOR
// for (let i = 0; i <= mapa.size; i++) {
//     console.log(mapa.keys(i))
// }

//FOR OF
console.log("----ENTRADAS----");
for(entrada of mapa.entries([])){
    console.log(entrada);
}
// (2) ['indice', 'valor']
// (2) [true, 'porque se puede hacer esto?']

console.log("----CLAVES----");
for(clave of mapa.keys()){
    console.log(clave);
}
// indice
// true

console.log("----VALOR----");
for(valor of mapa.values()){
    console.log(valor);
}
// valor
// porque se puede hacer esto?

console.log("----VERIFICAR----");
console.log(mapa);
if(mapa.has("indice")){
    mapa.delete("indice");
}
console.log(mapa);



//CLEAR
mapa.clear();
console.log(mapa); //Map(0) {size: 0}
// alert(mapa); // para web

