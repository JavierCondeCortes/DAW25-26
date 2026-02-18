class Vehiculo {
    #marca
    #modelo
    constructor(marca, modelo, velocidad) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.velocidad = velocidad;
    }
    acelerar(velocidad) {
        this.velocidad += velocidad
    }

    reducir(velocidad) {
        if (this.velocidad > velocidad) {
            this.velocidad -= velocidad
        }
    }

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }
}

class Coche extends Vehiculo {
    acelerar() {
        this.velocidad += 10;
    }
}

class Moto extends Vehiculo {
    acelerar() {
        this.velocidad += 20;
    }
}

const coche = new Coche("Toyota", "Corolla", 0);
const moto = new Moto("Honda", "CBR", 0);

coche.acelerar();
moto.acelerar();

console.log(coche.velocidad); // 10
console.log(moto.velocidad);  // 20
