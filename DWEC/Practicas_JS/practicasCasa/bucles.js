let arrobjetos = [
    { nombre: "Ana", apellido: "García" },
    { nombre: "Luis", apellido: "Pérez" },
    { nombre: "Marta", apellido: "López" }
];

for (const persona of arrobjetos) {
    console.log(persona.apellido);
}

for (const persona in arrobjetos) {
    console.log (arrobjetos[persona].nombre)
}