import { RegistroBailarines } from "./registroBailarines.js";

export class GestionPista extends RegistroBailarines{
    #pista;
    #posicion;
    #movimientos;
    
    constructor(posicion,movimientos){
        this.#pista = [];
        this.#posicion = posicion;
        this.#movimientos = movimientos;
        super(this.nombreGrupo());
    }

    set posicion(nuevaPosicion){
        this.#posicion = nuevaPosicion;
    }
    set movimientos(nuevosMovimientos){
        this.#movimientos = nuevosMovimientos;
    }
    get posicion(){
        return this.#posicion;
    }
    get movimientos(){
        return this.#movimientos;
    }
}