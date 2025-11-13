//ej 2

let FrasePrueba = "En un lugar de la mancha";

let f4SinEspacios = FrasePrueba.split(" ")
    .map((palabra) => palabra.toUpperCase(0));

console.log(f4SinEspacios);

let f5LogintudMedia = FrasePrueba.split(" ")
    .map((palabra)  => (palabra))
    .filter((palabra) => palabra.length)
    .reduce((acc,palabraFiltrada) => acc+palabraFiltrada.length,0) / FrasePrueba.split(" ").length;

console.log(f5LogintudMedia);

let f6ArrayLongitudPalabra = FrasePrueba.split(" ")
    .filter(palabra => palabra.includes("a"))
    .reduce((acc,palabraFiltrada) => acc+palabraFiltrada.length,0);
