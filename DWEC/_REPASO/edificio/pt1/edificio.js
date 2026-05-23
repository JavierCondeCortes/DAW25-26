export class edificio{
    #calle
    #numero
    #codigoPostal
    #plantas
    #puertas
    #estructura
    constructor(calle,numero,codigoPostal, plantas,puertas){
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = plantas;
        this.#puertas = puertas;
        this.#estructura = this.#creacionEdificio();
    }

    set calle(newCalle){
        this.#calle = newCalle;
    }
    set numero(newNumero){
        this.#numero = newNumero;
    }
    set codigoPostal(newCodigo){
        this.#codigoPostal = newCodigo;
    }
    set plantas(newPlantas){
        this.#plantas = newPlantas;
    }
    set puertas(newPuertas){
        this.#puertas = newPuertas;
    }

    get calle(){
        return this.#calle;
    }
    get numero(){
        return this.#numero;
    }
    get codigoPostal(){
        return this.#codigoPostal;
    }
    get plantas(){
        return this.#plantas;
    }
    get puertas(){
        return this.#puertas;
    }

    #creacionEdificio(){
        let estructura = [];
        for (let i = 0; i < this.#plantas; i++) {
            estructura[i] = [];
            for (let j = 0; j < this.#puertas; j++) {
                estructura[i][j]="x";
            }
        }
        return estructura;
    }

    asignarPuerta(nombre,piso,puerta){
        const pisoAsociado = piso-1;
        const pertaAsociada = puerta-1;

        if(piso<=this.#plantas && puerta<=this.#puertas){
            this.#estructura[pisoAsociado][pertaAsociada] = nombre;
        }
    }

    verEdificio(){
        console.table(this.#estructura);
    }
}