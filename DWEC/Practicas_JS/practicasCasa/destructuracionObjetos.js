// Ejemplo básico
const persona = {
    nombre: 'Sarah',
    pais: 'Nigeria',
    trabajo: 'Desarrollador'
};

const { nombre, pais, trabajo } = persona;
console.log(nombre);  // Sarah
console.log(pais);    // Nigeria
console.log(trabajo); // Desarrollador

// Variables existentes (usar paréntesis)
let nombreExistente, trabajoExistente;
({ nombre: nombreExistente, trabajo: trabajoExistente } = persona);
console.log(nombreExistente); // Sarah
console.log(trabajoExistente); // Desarrollador

// Valores por defecto
const { nombre: n = 'Luis', amiga = 'Annie' } = persona;
console.log(n);     // Sarah
console.log(amiga); // Annie

// Cambiar nombre de variables
const persona2 = { nombre: 'Sara', pais: 'Italia' };
const { nombre: firstName, pais: country = 'España' } = persona2;
console.log(firstName); // Sara
console.log(country);   // Italia
