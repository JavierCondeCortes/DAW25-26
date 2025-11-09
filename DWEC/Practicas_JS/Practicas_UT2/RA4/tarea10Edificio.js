class Edificio {
    #piso;
    #puerta;
    #propietario;
    constructor(piso, puerta, propietario = "Sin propietario"){
        this.#piso = piso,
        this.#puerta = puerta,
        this.#propietario = propietario
    }

    set piso (piso){
        this.#piso = piso;
    }
    set puerta (puerta){
        this.#puerta = puerta;
    }
    set propietario (propietario){
        this.#propietario = propietario;
    }

    get piso (){
        return this.#piso;
    }
    get puerta (){
        return this.#puerta;
    }
    get propietario (){
        return this.#propietario;
    }

    agregarPropietario(propietario,puerta,piso){
        
    }
}

// lo de abajo es un elemento temporar donde se realizo la interpretacion del array bidimensional
// este se comprendio para la funcion agregar propietario

const comunidad = [[new Edificio(0,0,"Elisa"),new Edificio(0,1,"Jose"),new Edificio(0,2,"Emma")],
                    [new Edificio(1,0,"Francisco"),new Edificio(1,1,"Elena"),new Edificio(1,2,"Alfonso")]]


console.table (comunidad.map(e => e.map(f => f.propietario)));
