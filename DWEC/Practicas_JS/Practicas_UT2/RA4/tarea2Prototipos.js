const person = {name: "paco", edad: 30};
const student = {course:"A"};
//el prototipo de los dos objetos es el mismo
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student)); //true / === compara mismo contenido y tipo O direccion de memoria
//"student" no tiene la propiedad "name"
console.log(student.name); //ubdefined
// Asigna a "student" el prototipo "Person"
Object.setPrototypeOf(student, person);
//ahora "student" tiene la propiedad "name" (en el prototipo)
console.log(student.name); //paco //imprime paco ya que estudent no tiene pero si lo tuviera si lo cogeria

// creamos una nueva propiedad "name" en "student"
student.name = "pedro";
console.log(student.name); //pedro
console.log(person.name); //paco

console.log("---PROBANDO EL FORIN FOROF FOREACH---")

const person2 = {name: "paco", edad: 30};
const student2 = {course:"A"};

Object.setPrototypeOf(student2,person2); //PADRE,HIJO

console.log(">>>> for in:"); //PADRE E HIJO
for(const k in student2){
    console.log(`${k} ${student2[k]}`);
}

console.log('>>>> for of:'); //HIJO
for(const k of Object.keys(student2)){
    console.log(`${k} ${student2[k]}`);
}

console.log(">>>> foreach:"); //HIJO
Object.entries(student2).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})