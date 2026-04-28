class profesores extends bailarines{
    #tutorNivel
    constructor(nombre1,nombre2,apellido1,apellido2,nivelGrupo = ["basico","intermedio","avanzado"],tutor= ["basico","intermedio","avanzado"]){
        super(nombre1,nombre2,apellido1,apellido2,nivelGrupo);
        this.#tutorNivel = tutor;
    }
}