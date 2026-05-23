import empleado from "./CreacionClase.js"
class programador extends empleado{
    #sueldo
    constructor(nombre, dni){
        super(nombre,dni);
        this.#sueldo = 1500;
    }

    set sueldo(sueldo){
        this.#sueldo = sueldo;
    }

    get sueldo(){
        return this.#sueldo;
    }

    calcularSueldo(diasTrabajados){
        return (this.#sueldo/30)*diasTrabajados;
    }
}