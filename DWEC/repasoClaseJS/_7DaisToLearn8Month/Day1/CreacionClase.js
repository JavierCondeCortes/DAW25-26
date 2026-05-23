export default class empleado{
    #nombre
    #dni
    constructor(nombre,dni){
        this.#nombre = nombre;
        this.#dni = dni
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set dni(dni){
        this.#dni = dni;
    }

    get dni(){
        return this.#dni;
    }

    get nombre(){
        return this.#nombre;
    }
}