export default Padre;

class Padre {
    #nombre; #apellido; #coche;
    constructor(nombre,apellido,coche){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#coche = coche;
    }
    comer(){
        return "Estoy comiendo huevos";
    }
    cenar(){
        return "Estoy cenando huevos";
    }
}