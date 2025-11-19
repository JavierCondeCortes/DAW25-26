// ==============================
// PROPIEDADES Y MÉTODOS BÁSICOS
// ==============================

let texto = "Hola Mundo";

// Longitud
console.log(texto.length); // 10

// Concatenar
console.log(texto.concat(" JS")); // Hola Mundo JS

// Carácter en posición
console.log(texto.charAt(1)); // o

// Código Unicode
console.log(texto.charCodeAt(1)); // 111

// Posición de subcadena
console.log(texto.indexOf("Mun")); // 5
console.log(texto.lastIndexOf("o")); // 9

// Subcadena desde posición
console.log(texto.substr(0, 4)); // Hola

// Minúsculas y mayúsculas
console.log(texto.toLowerCase()); // hola mundo
console.log(texto.toUpperCase()); // HOLA MUNDO

// Dividir en array
console.log(texto.split(" ")); // ["Hola", "Mundo"]

// ==============================
// MÉTODOS ADICIONALES DE STRINGS
// ==============================

let frase = "  Bienvenido al curso de JavaScript  ";

// ¿Termina con...?
console.log(frase.endsWith("JavaScript  ")); // true

// ¿Empieza con...?
console.log(frase.startsWith("  Bien")); // true

// ¿Incluye...?
console.log(frase.includes("curso")); // true

// Repetir cadena
console.log("JS ".repeat(3)); // JS JS JS 

// Eliminar espacios
console.log(frase.trim());       // "Bienvenido al curso de JavaScript"
console.log(frase.trimStart());  // "Bienvenido al curso de JavaScript  "
console.log(frase.trimEnd());    // "  Bienvenido al curso de JavaScript"

// Rellenar al inicio
console.log("42".padStart(5, "0")); // "00042"

// Rellenar al final
console.log("42".padEnd(5, "."));   // "42..."
