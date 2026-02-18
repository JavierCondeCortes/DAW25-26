class Persona {
    constructor(name){
        this.nombre = name;
    }
    static comparar (personaA,personaB){
        return personaA.nombre.localeCompare(personaB.nombre);
    }
    static crearPersona (nombre){
        return new this(nombre);
    }
}
const a = [new Persona('pepe'),new Persona('paco')];
console.log(Persona.comparar(a[0],a[1]));
a.sort(Persona.comparar);
console.log(a.map(e => e.nombre).join(','))
console.log(Persona.comparar(a[0],a[1]));
const persona = Persona.crearPersona('Luis');
console.log(persona.nombre);