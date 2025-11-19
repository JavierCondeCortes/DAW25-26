//MAP---------------

let mapa = new Map();
mapa.set (1,'num1');
mapa.set ('1','str1');
mapa.set(true,'bool1');

console.log(mapa.get(1));//num1
console.log(mapa.get('1'));//str1
console.log(mapa.size);//3
console.log(mapa.has(1)); //true
console.log(mapa.keys()) //MapIterator {1, 1, true}
console.log(mapa.entries())//MapIterator {1 => num1, 1 => str1, true => bool1}

for (const [clave,valor] of mapa) {
    console.log(clave + " " + valor);
}
// 1 num1
// 1 str1
// true bool1

mapa.clear();
console.log(mapa.entries());//MapIterator

//SET---------------

let establecer = new Set();
console.log(establecer.add("siu")); //Set(1) {size: 1, siu}
console.log(establecer.has("siu")) //true
console.log(establecer.values()) //SetIterator {siu}
establecer.clear();
console.log(establecer.values()) //SetIterator
