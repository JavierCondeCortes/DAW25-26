import { RegistroBailarines } from "./registroBailarines.js"

export class Profesores extends RegistroBailarines {
    #nivelAsignado
    constructor(nivelAsignado,nombreGrupo,){
        super(nombreGrupo);
        this.#nivelAsignado = nivelAsignado;
    }

    set nivelAsignado(nuevoNivelAsignado){
        this.#nivelAsignado = nuevoNivelAsignado;
    }
    get nivelAsignado(){
        return this.nivelAsignado;
    }
    get nombreGrupo(){
        return this.nombreGrupo;
    }

    verificacionImpartido(){
        //lo siento por el uso de otra variable
        let niveles = [];
        let profesoresClases = new Map();
        if(niveles.some(nivel => nivel != this.#nivelAsignado)){
            this.#nivelAsignado = this.Clases
            niveles.push(this.#nivelAsignado);
            profesoresClases.set (this.nombreGrupo,this.#nivelAsignado);
            return "las clases pueden ser impartidas por el grupo";
        }else{
            return "ya existen unos profesores en esa clase"
        }
    }
}