let array1 = [1,2,3,4,5,6,7,8,9,10,11,5,12];
let array2 = ['hola', 2, 'buenas', 3,'atardeceres'];

console.log('lengt de 1')
console.log(array1.length);

console.log('concat');
console.log(array1.concat(array2));

console.log('join');
console.log(array1.join());

console.log('pop');
console.log(array1.pop())
console.log(array1)

console.log('push')
console.log(array1.push(13))//muestra la cantidad de valores
console.log(array1);

console.log('shift');
console.log(array1.shift());
console.log(array1);

console.log('unshift')
console.log(array1.unshift(0))
console.log(array1);

console.log('reverse')
console.log(array1.reverse());

console.log('short')
console.log(array1.sort((a,b)=>a-b))

console.log('indexOf');
console.log(array1.indexOf(5))
console.log(array1);

console.log('lastIndexOf');
console.log(array1.lastIndexOf(5))
console.log(array1);

console.log('slice');
console.log(array1.slice(2,5));
console.log(array1);

console.log('splice');
console.log(array1.splice(0,1,1))
console.log(array1);