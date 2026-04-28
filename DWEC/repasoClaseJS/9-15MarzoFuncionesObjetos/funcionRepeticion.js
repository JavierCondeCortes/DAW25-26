arreglo = [1,2,3,4,5,6];
//funcion de repetcion

console.log("for")
for(i=0;i<2;i++){
    console.log(i);
}

console.log("foreach")
arreglo.forEach(num => {
    console.log(num);
});

console.log("forof") //Map(const [key, value] of llave), Set, arrays String...
for (const num of arreglo) {
    console.log(num);
}

console.log("forin") //propiedades / objetos
const persona = { nombre: "Ana", edad: 30 };

for (const prop in persona) {
    console.log(prop, persona[prop]);
}
