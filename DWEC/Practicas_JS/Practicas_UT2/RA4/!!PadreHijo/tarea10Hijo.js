import Padre from "./tarea10Padre.js";
export default Hijo;

class Hijo extends Padre{
    #nombre;
    #moto;
    constructor(nombre,apellido,moto = "Sin moto"){
        this.#nombre = nombre;
        this.#moto = moto;
        super(apellido);
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get moto(){
        return this.#moto;
    }
    set moto(moto){
        this.#moto = moto;
    }
}