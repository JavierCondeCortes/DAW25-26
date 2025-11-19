// Clase Persona con propiedades públicas
class Persona {
    #nombre;
    #apellidos;
    #edad;
    #trabajo;

    constructor(nombre, apellidos, edad, trabajo) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
        this.#trabajo = trabajo;
    }

    // Método que expone los datos como objeto
    get datos() {
        return {
            nombre: this.#nombre,
            apellidos: this.#apellidos,
            edad: this.#edad,
            trabajo: this.#trabajo
        };
    }
}

// ==============================
// SUBCLASE HIJO
// ==============================

class Hijo extends Persona {
    #nombre;
    #edad;

    constructor(nombre, edad, apellidosPadre) {
        // heredamos solo el apellido del padre
        super("", apellidosPadre, 0, "");
        this.#nombre = nombre;
        this.#edad = edad;
    }

    // Método que expone los datos del hijo
    get datos() {
        return {
            nombre: this.#nombre,
            apellidos: super.datos.apellidos, // heredado del padre
            edad: this.#edad
        };
    }
}

// ==============================
// PRUEBA DE DESESTRUCTURACIÓN
// ==============================

let padre = new Persona("Carlos", "Sainz", 55, "Piloto");
let hijo = new Hijo("Antonio", 12, padre.datos.apellidos);

// Desestructuración del objeto expuesto por el getter
const { nombre, apellidos, edad } = hijo.datos;

console.log(nombre);    // Antonio
console.log(apellidos); // Sainz
console.log(edad);      // 12
