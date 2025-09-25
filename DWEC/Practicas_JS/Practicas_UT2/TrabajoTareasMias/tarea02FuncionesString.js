let cadenaTexto = "Esto es una cadena de texto de prueba";
let cadenaTextoDos = "Otra prueba de string para las funciones ";

    //length //permite saber la longitud del string

console.log(cadenaTexto.length); //37

    //concat //permite concatenar dos strings

console.log(cadenaTexto.concat(cadenaTextoDos)); //Esto es una cadena de texto de pruebaOtra prueba de string para las funciones 

    //charAt(pos) //devuelve el caracter de la posicion "pos"

console.log(cadenaTexto.charAt(1)); //s

    //charCodeAt(p) //devuelve el codigo Unicode de la posicion "pos"

console.log(cadenaTexto.charCodeAt(1)); // 115 // s = 115

    //indexOf(sub) devuelve posicion de la subcadena 

console.log(cadenaTexto.indexOf("a",10)); // 10  // ("a",10) el diez es desde que caracter quiero que empieze a contar

    //lastIndexOf(sub) devuelve la ultima posicion de la subcadena

console.log(cadenaTexto.lastIndexOf("a",35)) // 17 ("a",35) el 35 es el numero de la posicion final que damos al texto

    //substr(i,f) //devuelve subcadena desde la i a la f

console.log(cadenaTexto.substring(1,20)); //sto es una cadena d

    //toLowerCase //devuelve string en minusculas

console.log(cadenaTexto.toLowerCase()); //esto es una cadena de texto de prueba

    //toUpperCase //convierte string en mayusculas

console.log(cadenaTexto.toUpperCase()); // ESTO ES UNA CADENA DE TEXTO DE PRUEBA 

    //split(c) //divide cadena en diferentes partes separadas por "c"

console.log(cadenaTexto.split(" ")); //(8) ['Esto', 'es', 'una', 'cadena', 'de', 'texto', 'de', 'prueba']

    //endsWitch() // determina si un string termina con otro string

console.log(cadenaTexto);
console.log(cadenaTexto.endsWith("yeas")); //false
console.log(cadenaTexto.endsWith("prueba")); //true

    //startWith() // determina si un string empieza con otro string

console.log(cadenaTexto);
console.log(cadenaTexto.startsWith("yeas")); //false
console.log(cadenaTexto.startsWith("Esto")); //true

    //includes() // determina si un string contiene otro

console.log(cadenaTexto);
console.log(cadenaTexto.includes("cadena de")); //true
console.log(cadenaTexto.includes("por si acaso")) //false

    //match() //devuelve arrays con las ocurrencias !!!!!

console.log(cadenaTexto); //Esto es una cadena de texto de prueba
let re = /es/g;
console.log(cadenaTexto.match(re)); //(1) ['es'] //no muestra la primera es del string debido a que tiene una "E" mayuscula

    //repeat() //repite string un numero de veces

console.log(cadenaTexto.repeat(3)); //Esto es una cadena de texto de pruebaEsto es una cadena de texto de pruebaEsto es una cadena de texto de prueba

    //trim() //permite quitar espacios en blanco principio y fin

let demasiadosEspacios = "         hay demasiados espacios     ";
console.log(demasiadosEspacios);
console.log(demasiadosEspacios.trim());

    //padStart() //añade espacios al principio

console.log(cadenaTexto.padStart(50,"0")); //0000000000000Esto es una cadena de texto de prueba //50 es el total de caracteres

    //padEnd() //añade espacios al final

console.log(cadenaTexto.padEnd(50,"SIUU")) //Esto es una cadena de texto de pruebaSIUUSIUUSIUUS