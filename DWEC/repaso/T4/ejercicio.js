class Vehiculo {
    #pasajeros
    constructor(pasajeros) {
        this.#pasajeros = pasajeros;
    }
}

class Turismo extends Vehiculo {
    #color
    constructor(pasajeros, color) {
        super(pasajeros);
        this.#color = color;
    }

    static generar(pasajeros, color) {
        return new this(pasajeros, color)
    }

    obtener(){
        this.pasajeros
        this.color
    }
}

class Camion extends Vehiculo {
    #tara
    constructor(pasajeros, tara) {
        super(pasajeros)
        this.#tara = tara;
    }
    static generar(pasajeros, tara) {
        return new this(pasajeros, tara)
    }
}

//generacion aleatoria de vehiculos
const mapaVehiculos = new Map();
let id = 0;

function aleatorio() {
    let tipo = Math.floor(Math.random() * 1.99);
    let pasajeros = Math.floor(Math.random() * 7 + 1);

    let vehiculo;

    if (tipo === 1) {
        let color = ['rojo', 'verde', 'azul']
        let colorRand = color[Math.floor(Math.random() * 3)]

        Turismo.generar(pasajeros, colorRand);
    } else {
        let tara = Math.floor(Math.random() * 1000);

        Camion.generar(pasajeros, tara)
    }
    mapaVehiculos.set(id++,vehiculo);

}


let contador = 0;
let repeat = setInterval(() => {
    if (contador !== 10) {
        contador++
        aleatorio();
    } else {
        clearInterval(repeat)
        console.log(mapaVehiculos.values())
    }
});
