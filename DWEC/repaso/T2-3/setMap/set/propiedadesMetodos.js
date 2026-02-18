let elemento = new Set();

elemento.add('lechuga');
elemento.add('tomate');
elemento.add('alcaparras');
elemento.add(2);
elemento.add(6);

console.log('values')
console.log(elemento.values())

console.log('has')
console.log(elemento.has(2))

console.log('elementos totales')
console.log(elemento)

console.log('size')
console.log(elemento.size)

console.log('clear')
elemento.clear();
console.log(elemento)