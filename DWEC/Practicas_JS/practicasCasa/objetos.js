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

    // Getters
    get nombre() { return this.#nombre; }
    get apellidos() { return this.#apellidos; }
    get edad() { return this.#edad; }
    get trabajo() { return this.#trabajo; }

    // Setters
    set nombre(nuevoNombre) { this.#nombre = nuevoNombre; }
    set apellidos(nuevoApellidos) { this.#apellidos = nuevoApellidos; }
    set edad(nuevaEdad) { this.#edad = nuevaEdad; }
    set trabajo(nuevoTrabajo) { this.#trabajo = nuevoTrabajo; }
}

// ==============================
// SUBCLASE HIJO
// ==============================

class Hijo extends Persona {
    #nombre;
    #edad;

    constructor(nombre, edad, apellidosPadre) {
        // Solo heredamos el apellido del padre
        super("", apellidosPadre, 0, ""); 
        this.#nombre = nombre;
        this.#edad = edad;
    }

    // Getters y Setters propios
    get nombre() { return this.#nombre; }
    set nombre(nuevoNombre) { this.#nombre = nuevoNombre; }

    get edad() { return this.#edad; }
    set edad(nuevaEdad) { this.#edad = nuevaEdad; }

    // El apellido lo hereda del padre (no lo redefinimos)
}


let padre = new Persona("Carlos", "Sainz", 55, "Piloto");
console.log("Padre:", padre.nombre, padre.apellidos, padre.edad, padre.trabajo);
// Padre: Carlos Sainz 55 Piloto

let hijo = new Hijo("Antonio", 12, padre.apellidos);
console.log("Hijo:", hijo.nombre, hijo.apellidos, hijo.edad);
// Hijo: Antonio Sainz 12
