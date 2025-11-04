class Vehiculo {
    constructor(pasajeros) {
        this._pasajeros = pasajeros;
    }

    getPasajeros() {
        return this._pasajeros;
    }
}

class Camion extends Vehiculo {
    constructor(pasajeros, tara) {
        super(pasajeros);
        this._tara = tara;
    }

    mostrar() {
        return `Tipo: Camion | Pasajeros: ${this._pasajeros} | Tara: ${this._tara}`;
    }
}

class Turismos extends Vehiculo {
    constructor(pasajeros, color) {
        super(pasajeros);
        this._color = color;
    }

    mostrar() {
        return `Tipo: Turismo | Pasajeros: ${this._pasajeros} | Color: ${this._color}`;
    }
}

let array = [];

function capturaRelog() {
    let fecha = new Date();
    return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}

function generarVehiculos() {
    let nTurismo = Math.floor(Math.random() * 3) + 1;
    let nCamion = Math.floor(Math.random() * 3) + 1;
    let listaColor = ["red", "blue", "green"];

    for (let i = 0; i < nTurismo; i++) {
        let nPasajeros = Math.floor(Math.random() * 6) + 1;
        let color = listaColor[Math.floor(Math.random() * listaColor.length)];
        array.push(new Turismos(nPasajeros, color));
    }

    for (let i = 0; i < nCamion; i++) {
        let nPasajeros = Math.floor(Math.random() * 6) + 1;
        let tara = Math.floor(Math.random() * 9000) + 1000;
        array.push(new Camion(nPasajeros, tara));
    }
}

function mostrarVehiculos() {
    let hora = capturaRelog();
    for (let i = 0; i < array.length; i++) {
        console.log(`Hora: ${hora} | ${array[i].mostrar()}`);
    }
}

// Ejecutar
generarVehiculos();
mostrarVehiculos();
