//poner barrabaja para no tener bucle infinito de error

class Persona{
    constructor (nombre){
        this._nombre=nombre;
    }

    set nombre (value) {
        this._nombre = value;
    }

    get nombre (){
        return this._nombre;
    }
}

const p = new Persona("paco");
console.log(p.nombre); //paco
p.nombre = "Raul";
console.log(p.nombre); //raul