let palabra = 'Hola buenas tardes a todos los indigenas de los YT ';
let nombre ='me llamo eustaquio'

console.log('length')
console.log(palabra);
console.log(palabra.length);

console.log('concat');
console.log(palabra.concat(nombre))

console.log('charAt')
console.log(palabra.charAt(0));

console.log('indexOf')
console.log(palabra.indexOf('tardes'))

console.log('lastIndexOf')
console.log(palabra.lastIndexOf('los'))

console.log('substr')
console.log(palabra.substring(3,30))

console.log('to lower case')
console.log(palabra.toLowerCase())

console.log('to upper case')
console.log(palabra.toUpperCase())

console.log('split')
console.log(palabra.split(' '))

console.log('endWith')
console.log(palabra.endsWith('YT '))

console.log('startWith');
console.log(palabra.startsWith('hola'))

console.log('includes')
console.log(palabra.includes('los'))

console.log('match')
let mayus = /[A-Z]/g
console.log(palabra.match(mayus))

console.log('repeat');
console.log(palabra.repeat(2));

console.log('replace')
console.log(palabra.replace('los','las'))

console.log('trim')
console.log(palabra.trim())

console.log('padStart')
console.log(palabra.padStart(60,"¿"))

console.log('padEnd');
console.log(palabra.padEnd(60,"¿"))