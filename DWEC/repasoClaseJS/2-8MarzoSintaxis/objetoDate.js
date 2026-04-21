//objeto Date
//al ser un objeto tenemos las funciones set y get

let fechaHoy = new Date();
let fechaElegida = new Date("2025-10-14");

console.log("\n---GetMinute---");

console.log("\n---GetHour---");
console.log(fechaHoy.getHours());
console.log(fechaElegida.getHours());

console.log("\n---GetDate--- (DIA DEL MES)");
console.log(fechaHoy.getDate());
console.log(fechaElegida.getDate());

console.log("\n---GetDay--- (DIA DE LA SEMANA)");
console.log(fechaHoy.getDay());
console.log(fechaElegida.getDay());

console.log("\n---GetMonth---");
console.log(fechaHoy.getMonth()+1 + " | Para marcar el mes real sumar 1, ya que enero es 0");
console.log(fechaElegida.getMonth()+1 + " | Para marcar el mes real sumar 1, ya que enero es 0");

console.log("\n---GetFullYear---");
console.log(fechaHoy.getFullYear());
console.log(fechaElegida.getFullYear());

