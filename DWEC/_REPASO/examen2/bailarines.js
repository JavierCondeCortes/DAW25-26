export class bailarin {
    #nombre
    #dni
    #estilo
    #sexo
    #fechaAlta
    constructor(nombre,dni,fechaAlta,estilo,sexo){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#fechaAlta = fechaAlta;
        this.#estilo = estilo;
        this.#sexo = sexo;
    }

    //para poder verlos al guardar en localStorage para hacerlos publicos
    toJSON() {
        return {
            nombre: this.#nombre,
            dni: this.#dni,
            fechaAlta: this.#fechaAlta,
            estilo: this.#estilo,
            sexo: this.#sexo
        };
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

    get estilo(){
        return this.#estilo;
    }

    get sexo(){
        return this.#sexo;
    }


    set nombre(nombre){
        this.#nombre = nombre;
    }
    
    set dni(dni){
        this.#dni = dni;
    }

    set fechaAlta(fechaAlta){
        this.#fechaAlta = fechaAlta;
    }

    set estilo(estilo){
        this.#estilo = estilo;
    }

    set sexo(sexo){
        this.#sexo = sexo;
    }

// dni.match(/\d{8}[A-Z]/)

}