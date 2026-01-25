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

    agregarPlantas(nPlantas, nPuertas) {
        this.#plantas = Array.from({ length: nPlantas }, () =>
            Array.from({ length: nPuertas }, () => null)
        );
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

