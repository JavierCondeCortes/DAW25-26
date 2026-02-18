class Producto{
    #nombre
    #precio
    constructor(nombre,precio){
        this.#nombre=nombre;
        this.#precio=precio;
    }
    descuento(precio){
        if(precio> this.#precio){
            
        }else{
            this.#precio-=precio;
        }
    }

    obtener(){
        return(`${this.#nombre} - ${this.#precio}`)
    }
}

const pr = new Producto('servilletas',10);
console.log(pr.obtener());

pr.descuento(13)
console.log(pr.obtener());

pr.descuento(3)
console.log(pr.obtener());
