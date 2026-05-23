import profesores from "./profesores.js";

export default class festival{
    #nombre;
    #fecha;
    #profesores;
    #parejas;
    constructor(nombre){
        this.#nombre = nombre;
        this.#fecha;
        this.#profesores = [];
        this.#parejas = [];
    }

    get nombre(){
        return this.#nombre;
    }

    get fecha(){
        return this.#fecha;
    }

    agregarProfesores(pareja){

        this.#profesores.push(pareja);
    }

    agregarPareja(pareja){
        this.#parejas.push(pareja);
    }
}