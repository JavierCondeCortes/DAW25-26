export default class bailarines{
    #nombre1
    #nombre2
    #apellido1
    #apellido2 
    #nivelGrupo
    #nombrePareja
    #posicionPista
    #orientacion

    constructor(nombre1,nombre2,apellido1,apellido2,nivelGrupo = ["basico","intermedio","avanzado"]){
        this.#nombre1 = nombre1;
        this.#nombre2 = nombre2;
        this.#apellido1 = apellido1;
        this.#apellido2 = apellido2;
        this.#nivelGrupo = nivelGrupo;
        this.#posicionPista;
        this.#orientacion;

        let nombreGrupo = [];

        for(let i=0; i<nombre1.length; i++){
            if(i%2!=0){
                nombreGrupo.push(nombre1[i]);
            }
        }
        for(let i=0; i<nombre2.length; i++){
            if(i%2!=0){
                nombreGrupo.push(nombre2[i]);
            }
        }

        this.#nombrePareja = nombreGrupo.join("");
    }

    get nombre1 (){
        return this.#nombre1;
    }

    get nombre2 (){
        return this.#nombre2;
    }

    get apellido1(){
        return this.#apellido1;
    }

    get apellido2(){
        return this.#apellido2;
    }

    get nivelGrupo(){
        return this.#nivelGrupo;
    }

    get nombrePareja(){
        return this.#nombrePareja;
    }

    get posPista(){
        return this.#posicionPista;
    }

    set posPista(posPista){
        this.#posicionPista = posPista;
    }
}