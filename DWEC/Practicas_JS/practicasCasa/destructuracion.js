// Ejemplo básico
const array = ['José', 'Pérez', 'García', 'C/ Mayor, 1'];
const [nombre, apellido1] = array;
console.log(nombre);   // José
console.log(apellido1); // Pérez

// Saltar posiciones
const [primero, , , direccion] = array;
console.log(primero);   // José
console.log(direccion); // C/ Mayor, 1

// Usar rest (...)
const telefonosArray = ['José', 'Pérez', 983344343, 9834343];
const [nombreTel, , ...telefonos] = telefonosArray;
console.log(nombreTel);  // José
console.log(telefonos);  // [983344343, 9834343]

// Valores por defecto
const array2 = ['José'];
const [nombre2, apellido2 = 'Rodríguez'] = array2;
console.log(nombre2);   // José
console.log(apellido2); // Rodríguez

// Intercambiar variables
let a = 3, b = 6;
[a, b] = [b, a];
console.log(a); // 6
console.log(b); // 3
