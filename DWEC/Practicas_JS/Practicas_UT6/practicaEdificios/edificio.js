export class Edificio {
    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle, numero, codigoPostal) {
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [];
    }

    get calle() {
        return this.#calle;
    }
    get numero() {
        return this.#numero;
    }
    get codigoPostal() {
        return this.#codigoPostal;
    }
    get plantas() {
        return this.#plantas;
    }

    set calle(calle) {
        this.#calle = calle;
    }
    set numero(numero) {
        this.#numero = numero;
    }
    set codigoPostal(codigoPostal) {
        this.#codigoPostal = codigoPostal;
    }
    set plantas(plantas) {
        this.#plantas = plantas;
    }

    agregarPlanta(numPuertas) {
        const puertas = Array.from({ length: numPuertas }, () => null);
        this.#plantas.push(puertas);
    }

    agregarPropietario(prop, planta, puerta) {
        this.#plantas[planta][puerta] = prop
    }
    getNumeroPlantas() {
        return this.#plantas.length;
    }

    getNumeroPuertas(planta) {
        return this.#plantas[planta].length;
    }
    getPropietario(planta, puerta) {
        return this.#plantas[planta][puerta];
    }
};

// const inquilinosImportar = new Map[
//     [1, 1, 'mercedes', 'femenino', 3],
//     [1, 2, 'maria', 'femenino', 1],
//     [2, 2, 'alejandro', 'masculino', 2]
// ];

const edificio = new Edificio('san mertin', 65, 47010);

edificio.agregarPlanta(2);
edificio.agregarPlanta(2);
edificio.agregarPlanta(1);
edificio.agregarPlanta(1);

console.table(edificio.plantas);

