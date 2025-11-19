// ==============================
// CREAR FECHAS
// ==============================

let ahora = new Date(); // Fecha y hora actual
let desdeCadena = new Date("2025-11-18"); // Desde string tipo "aaaa-mm-dd"
let desdeNumeros = new Date(2025, 10, 18); // Año, mes (0-indexado), día

// ==============================
// OBTENER PARTES DE LA FECHA
// ==============================

let año = ahora.getFullYear();       // Año actual
let mes = ahora.getMonth();          // Mes (0 = enero)
let dia = ahora.getDate();           // Día del mes
let diaSemana = ahora.getDay();      // Día de la semana (0 = domingo)
let horas = ahora.getHours();        // Hora actual
let minutos = ahora.getMinutes();    // Minutos actuales

// ==============================
// SUMAR DÍAS A UNA FECHA
// ==============================

let fechaSumar = new Date("2025-11-18");
fechaSumar.setDate(fechaSumar.getDate() + 5); // Suma 5 días
console.log("Fecha +5 días:", fechaSumar);

// ==============================
// RESTAR DÍAS A UNA FECHA
// ==============================

let fechaRestar = new Date("2025-11-18");
fechaRestar.setDate(fechaRestar.getDate() - 3); // Resta 3 días
console.log("Fecha -3 días:", fechaRestar);

// ==============================
// DIFERENCIA ENTRE FECHAS (EN DÍAS)
// ==============================

let inicio = new Date("2025-11-01");
let fin = new Date("2025-11-18");

let diferenciaMs = fin - inicio; // Diferencia en milisegundos
let diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24); // Convertir a días

console.log("Días entre fechas:", diferenciaDias);

// ==============================
// TIMESTAMP Y PARSEO
// ==============================

let timestamp = Date.now(); // Milisegundos desde 1970
let desdeParse = Date.parse("2025-11-18"); // Parsea string a milisegundos

console.log("Timestamp actual:", timestamp);
console.log("Milisegundos desde parse:", desdeParse);

// ==============================
// MODIFICAR PARTES DE UNA FECHA
// ==============================

let fechaModificada = new Date();
fechaModificada.setFullYear(2030);
fechaModificada.setMonth(5); // Junio
fechaModificada.setDate(10);

console.log("Fecha modificada:", fechaModificada);


//calculo de FECHA EN DIAS

// ==============================
// CREAR LAS DOS FECHAS
// ==============================

let fecha1 = new Date(2006, 3, 15); // Recuerda: mes 3 = abril
let fecha2 = new Date(2005, 2, 8);  // mes 2 = marzo

// ==============================
// CALCULAR LA DIFERENCIA EN MILISEGUNDOS
// ==============================

let diferenciaMs2 = fecha1 - fecha2; // Resta directa entre objetos Date

// ==============================
// CONVERTIR MILISEGUNDOS A DÍAS
// ==============================

let diferenciaDias2 = diferenciaMs / (1000 * 60 * 60 * 24); // ms → días

// ==============================
// MOSTRAR RESULTADO
// ==============================

console.log("Diferencia en días:", diferenciaDias); // Resultado: 403
