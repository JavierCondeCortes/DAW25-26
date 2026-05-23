import bailarines from "./bailarines.js";

export default class profesores extends bailarines{
    #tutorNivel
    constructor(nombre1,nombre2,apellido1,apellido2,nivelGrupo,tutor){

        const nivelesValidos = ["basico","medio","avanzado"];

        if(!nivelesValidos.includes(nivelGrupo) || !nivelesValidos.includes(tutor)){
            throw new Error("error con la creacion, no se definieron los nivel de grupo o de clases a impartir");
        }else{
            super(nombre1,nombre2,apellido1,apellido2,nivelGrupo);
            this.#tutorNivel = tutor;
        }
    }

    get tutor(){
        return this.#tutorNivel;
    }

    set tutor(nuevoNivel){
        this.#tutorNivel = nuevoNivel;
    }
}