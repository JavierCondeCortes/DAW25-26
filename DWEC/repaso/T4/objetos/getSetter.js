class Persona{
    #nombre
    constructor(nombre){
        this.#nombre = nombre
    }
    set nombre (valor){
        this.#nombre = valor;
    }
    get nombre (){
        return this.#nombre;
    }
}

const p = new Persona('paco');
console.log(p.nombre);

p.nombre ='raul';
console.log(p.nombre)
