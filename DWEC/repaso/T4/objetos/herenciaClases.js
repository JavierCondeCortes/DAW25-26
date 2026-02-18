class Persona {
    constructor(nombre, ...apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    saludar(){
        return('hola soy '+ this.nombre);
    }
}

class Programador extends Persona{
    constructor(nombre, lenguaje){
        super(nombre);
        this.lenguaje=lenguaje
    }
    saludar(){
        return super.saludar() + ` programo ${this.lenguaje}`
    }
}


const pe = new Persona('pepe','fernandez','cosio');

console.log(pe.saludar())

const pr = new Programador('juaqui','js');

console.log(pr.saludar())