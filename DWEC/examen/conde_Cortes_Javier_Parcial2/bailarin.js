export class Bailarin{
    #dni
    constructor(){
        //decido hacerlo asi para usar el metodo inscribirse, porque sino no haria falta usarlo
        //me guio por lo que pone en el apartado de estructuras propias, por eso lo hago asi
        this.nombre = "";
        this.#dni = "";
        this.estilo = "";
        this.sexo = "";
        this.fecha = Date.now();
    }

    get obtenerDNI() {
        return this.#dni;
    }

    darAlta(nombre, dni, estilo, sexo){
        this.nombre = nombre;
        this.#dni = dni;

        let estilos = ['Bachata','Salsa','Rock','Swing']
        if (estilos.includes(estilo)){
            this.estilo = estilo;
        }else{
            return 'El estilo no esta presente en la lista'
        }
        this.sexo = sexo;
        this.fecha = Date.now();
    }

    
}