export default class bailarines{
    #nombre
    #dni
    #fechaAlta
    #Estilo
    #Sexo
    constructor(){
        this.#Estilo;
        this.#Sexo;
        this.#fechaAlta;
        this.#nombre;
        this.#dni;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }
    set dni(dni){
        if((/^\d{8}[A-Z]{1}$/).test(dni)){
            this.#dni = dni;
        }else{
            console.log("el dni no tiene correcta su estructura");
        }
    }
    set fechaAlta(fechaAlta){
        let fechaActual = Date.now;
        if(fechaAlta<fechaActual){
            this.#fechaAlta = fechaAlta;
        }else{
            console.log("la fecha es mas alta que la actual");
        }
    }
    set sexo(sexo){
        if(sexo === "masculino" || sexo === "femenino"){
            this.#Sexo = sexo;
        }else{
            console.log("el sexo introducido no se corresponde con los marcados")
        }
    }
    set estilo(estilo){
        if(estilo === "rock" || estilo === "swing" || estilo === "bachata" || estilo === "salsa"){
            this.#Estilo = estilo;
        }else{
            console.log("el estilo introducido no se corresponde con los marcados")
        }
    }

    get nombre(){
        return this.#nombre;
    }
    get dni(){
        return this.#dni;
    }
    get fechaAlta(){
        return this.#fechaAlta;
    }
    get sexo(){
        return this.#Sexo;
    }
    get estilo(){
        return this.#Estilo;
    }
}