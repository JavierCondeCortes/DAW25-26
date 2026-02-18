function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}
Persona.prototype.visualizar = function(){
    console.log(this.nombre);
}

const persona = new Persona('amelia',18);
persona.visualizar();
console.log(persona)