// ==============================
// CREACIÓN DE EXPRESIONES REGULARES
// ==============================

// Dos formas equivalentes:
const re1 = RegExp('hola');
const re2 = /hola/;

console.log(re1.test('El mensaje es "hola mundo"')); // true
console.log(re2.test('El mensaje es "hello mundo"')); // false


// ==============================
// ANCLAS Y PATRONES BÁSICOS
// ==============================

console.log(/^hello/.test('hola mundo'));   // false (no empieza por hello)
console.log(/world$/.test('hola mundo'));   // false (no termina en world)
console.log(/^h.*o$/.test('hola mundo'));   // true (empieza por h y acaba en o)
console.log(/^[0-9]/.test('hola mundo'));   // false (no empieza por número)
console.log(/[u-v]/.test('hola mundo'));    // true (contiene u o v)


// ==============================
// CLASES DE CARACTERES
// ==============================

console.log(/\d/.test('abc123'));   // true (hay dígitos)
console.log(/\D/.test('123'));      // false (solo dígitos)
console.log(/\w/.test('hola_mundo'));// true (alfanumérico o guion bajo)
console.log(/\W/.test('***'));      // true (no alfanumérico)
console.log(/\s/.test('hola mundo'));// true (espacio)
console.log(/\S/.test('hola'));     // true (no espacio)


// ==============================
// CUANTIFICADORES
// ==============================

console.log(/^a\d?/.test('ab3'));   // true (a seguido de 0 o 1 dígito)
console.log(/^a\d+/.test('ab3'));   // true (a seguido de 1+ dígitos)
console.log(/\d{3}/.test('h346a')); // true (3 dígitos seguidos)
console.log(/[a-c]{3}/.test('cab')); // true (3 letras entre a y c)


// ==============================
// GRUPOS Y CAPTURAS
// ==============================

const result = "abcabcx4".match(/(abc){2}(x\d)/);
console.log(result[0]); // abcabcx4 (texto completo)
console.log(result[1]); // abc (grupo repetido)
console.log(result[2]); // x4  (segundo grupo)


// ==============================
// REEMPLAZOS
// ==============================

let r = "My dog is a good dog";
console.log(r.replace(/dog/, "cat"));   // My cat is a good dog
console.log(r.replace(/dog/g, "cat"));  // My cat is a good cat

let r2 = "AAAsssAAssxAkkkkAAAAAA";
console.log(r2.replace(/A{2,}/g, "B")); // BsssBssxAkkkkB
