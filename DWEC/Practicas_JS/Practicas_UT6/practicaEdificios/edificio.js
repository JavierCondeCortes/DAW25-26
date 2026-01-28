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

    get calle() { return this.#calle; }
    get numero() { return this.#numero; }
    get codigoPostal() { return this.#codigoPostal; }
    get plantas() { return this.#plantas; }

    set calle(calle) { this.#calle = calle; }
    set numero(numero) { this.#numero = numero; }
    set codigoPostal(codigoPostal) { this.#codigoPostal = codigoPostal; }
    set plantas(plantas) { this.#plantas = plantas; }

    agregarPlanta(numPuertas) {
        const puertas = Array.from({ length: numPuertas }, () => null);
        this.#plantas.push(puertas);
    }

    agregarPropietario(prop, planta, puerta) {
        this.#plantas[planta][puerta] = prop;
    }

    agregarPropietario(prop, planta, puerta) {
        this.#plantas[planta][puerta] = prop;
    }

    borrarPropietario(planta, puerta) {
        this.#plantas[planta][puerta] = null;
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

// 1. Crear edificio
const edificio = new Edificio('san mertin', 65, 47010);

// 2. Crear plantas
edificio.agregarPlanta(2);
edificio.agregarPlanta(2);
edificio.agregarPlanta(1);
edificio.agregarPlanta(1);

// 3. Importar inquilinos
const inquilinosImportar = [
    { planta: 0, puerta: 1, nombre: 'mercedes', genero: 'femenino', miembros: 3 },
    { planta: 1, puerta: 0, nombre: 'maria', genero: 'femenino', miembros: 1 },
    { planta: 2, puerta: 0, nombre: 'alejandro', genero: 'masculino', miembros: 2 }
];

inquilinosImportar.map(inq => {
    edificio.agregarPropietario(
        {
            nombre: inq.nombre,
            genero: inq.genero,
            miembros: inq.miembros
        },
        inq.planta,
        inq.puerta
    );
});

// 4. Mostrar resultado
console.table(edificio.plantas);
