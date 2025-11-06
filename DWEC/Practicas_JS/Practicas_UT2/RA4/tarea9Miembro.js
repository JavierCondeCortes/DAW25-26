class Miembro {
    #nombre; #apellido;
    constructor(nombre = "Sin nombre",apellido = "Sin apellido"){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get apellido(){
        return this.#apellido;
    }

    set apellido(apellido){
        this.#apellido = apellido;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    comer() {
        console.log("Estoy comiendo");
    }

    cenar() {
        console.log("Estoy cenando");
    }
}

const M = new Miembro("Antonio","Lobato");
console.log(M.nombre);
