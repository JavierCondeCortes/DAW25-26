class Persona{
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre=nombre;
        this.#edad=edad;
    }

    presentarse(){
        return(`hola buenas, soy ${this.#nombre} y tengo ${this.#edad} años`)
    }
}

const p1 = new Persona('javier',20);

console.log(p1.presentarse())