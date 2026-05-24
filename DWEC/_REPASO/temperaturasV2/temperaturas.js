export class temperaturasLocalidad{
    #nombreLocalidad
    #temperaturaDia
    #media
    #dias
    constructor(localidad){
        this.#nombreLocalidad = localidad;
        this.#temperaturaDia = [];
        this.#media;
        this.#dias = 30;
    }

    set nombreLocalidad(nombre){
        this.#nombreLocalidad = nombre;
    }
    set temperaturaDia(lista){
        this.#temperaturaDia = lista;
    }
    set media(media){
        this.#media = media;
    }

    get nombreLocalidad(){
        return this.#nombreLocalidad;
    }
    get temperaturaDia(){
        return this.#temperaturaDia;
    }
    get media(){
        return this.#media;
    }

    asignarTempDia(dia,temp){
        this.#temperaturaDia [dia-1] = temp
    }

    genAleatoria(){
        let calculoMedia=0;
        for(let i=0; i<this.#dias; i++){
            let num = Math.floor(Math.random()*60-20)
            this.#temperaturaDia[i] =num ;
            calculoMedia += num;
        }
        this.#media = Math.floor(calculoMedia/this.#dias);
    }
}