class pistaBaile{
    #dimensiones;
    constructor(largo,ancho){
        this.#dimensiones = [];

        for(i=0; i<largo; i++){
            for(j=0; j<ancho; j++){
                this.#dimensiones.push("x");
            }
        }
    }
}