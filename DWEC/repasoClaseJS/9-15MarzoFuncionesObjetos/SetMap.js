//set y map

console.log("---Set---")

let seteado = new Set;

seteado.add(1,);
seteado.add("wenodia");
//en js Set solo se puede meter un valor, no es clave valor como en map, es por ello que si se hace foreach tiene que ser con un valor
// seteado.forEach((value,key) => console.log(`${value} ${key}`))
seteado.forEach((value) => console.log(`${value}`))


console.log("\n---Map---")

let mapa = new Map;

mapa.set(1,"valor1");
mapa.set(1,"valor2");
mapa.set(3,"valor3");
mapa.set(4,"valor3");

mapa.forEach((value,key) => console.log(`${key},${value}`));
