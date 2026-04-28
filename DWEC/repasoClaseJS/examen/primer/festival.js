class festival{
    #nombre
    #fecha
    #profesores
    #parejas
    constructor(nombre){
        this.#nombre = nombre;
        this.#fecha;
        this.#profesores = [];
        this.#parejas = [];
    }
    constructor(nombre,fecha){
        this.#nombre = nombre;
        this.#fecha = fecha;
        this.#profesores = [];
        this.#parejas = [];
    }

    get nombre(){
        return this.#nombre;
    }

    get fecha(){
        return this.#fecha;
    }

    set agregarPofesores(pareja){
        this.#profesores.push(pareja);
    }

    set agregarPareja(pareja){
        this.#parejas.push(pareja);
    }
}