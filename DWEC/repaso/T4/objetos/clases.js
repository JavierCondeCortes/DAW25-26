class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    visualizar(){
        console.log(this)
    }
}
let p1 = new Persona('juaqui',23)

p1.visualizar()