console.log(new Date())

let fechaCumpleaños = "2005/06/05";
let fechaParse = Date.parse(fechaCumpleaños);

console.log(new Date(fechaParse));
console.log(fechaParse.getMonth())