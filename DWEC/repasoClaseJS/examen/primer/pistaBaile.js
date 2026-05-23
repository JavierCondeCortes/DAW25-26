import festival from "./festival.js";

export default class pistaBaile{
    #dimensiones;
    constructor(largo,ancho){
        this.#dimensiones = [];

        for(i=0; i<largo; i++){
            for(j=0; j<ancho; j++){
                this.#dimensiones.push("x");
            }
        }
    }

    asignacion(festival){
        const participantes = festival.parejas;

        participantes.forEach(pareja => {
            let pos1 = Math.random(largo);
            let pos2 = Math.random(ancho);

            pareja.posPista = [pos1,pos2];
        });
    }
}