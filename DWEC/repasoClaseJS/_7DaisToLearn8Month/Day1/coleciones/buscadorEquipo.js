const empleados = [
    { nombre: "Ana", depto: "Ventas", habilidades: ["Excel"] },
    { nombre: "Luis", depto: "IT", habilidades: ["PHP", "SQL"] },
    { nombre: "Sara", depto: "IT", habilidades: ["JavaScript", "React"] },
    { nombre: "Marcos", depto: "IT", habilidades: ["JavaScript", "Python"] }
];

let empleadosItJs = empleados.filter(({depto,habilidades})=>{
    return depto === "IT" && habilidades.includes("JavaScript")
})

empleadosItJs.forEach((empleado)=>{
    console.log(`${empleado.nombre} es experto en: ${empleado.habilidades.join(" ")}`);
});