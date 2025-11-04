class Persona{
    constructor(nombre){
        this.nombre=nombre;
    }

    static comparar (personaA,personaB){
        return personaA.nombre.localeCompare(personaB.nombre);
    }

    static crearPersona (nombre){
        return new this(nombre);
    }
}
const a = [new Persona("pepe"),new Persona("paco"),new Persona("Albon"),new Persona("Alfredo")];
console.log(Persona.comparar(a[0],a[1])); //1
a.sort(Persona.comparar);   //Ordena por el orden de las letras de cada elemento
console.log(a.map(e=>e.nombre).join(",")); //Alfredo,paco,pepe
console.log(Persona.comparar(a[0],a[1])); //-1
const persona = Persona.crearPersona("luis"); 
console.log(persona.nombre); //luis
