const usuariosRaw = [
    { id: 1, nombre: "juan", apellido: "perez", edad: 25 },
    { id: 2, nombre: "marta", apellido: "garcía", edad: 30 },
    { id: 3, nombre: "pedro", apellido: "ruiz", edad: 18 }
];

let result = usuariosRaw.map(usuario=>({
    id: usuario.id,
    fullName:(usuario.nombre +" "+ usuario.apellido).toUpperCase()
}));

console.log(result);