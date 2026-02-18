class Libro{
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor=autor;
        this.disponible=true;
    }
}

class Biblioteca{
    constructor(){
        this.libros=[]
    }

    agregarLibros(libro){
        this.libros.push(libro)
    }

    buscar(titulo){
        if(this.libros.find(libro => libro.titulo === titulo)){
            console.log(`${titulo} fue encontrado disponible`)
        }
    }
    prestar(libro){
        if(libro.disponible===true){
            libro.disponible=false;
            console.log('el libro se dio de baja')
        }else{
            console.log('el libro esta prestado')

        }
    }
} 

const l1 = new Libro("tit1",'javier');
const l2 = new Libro("tit2",'julian');

console.log(l1.disponible);

const b1 = new Biblioteca;

b1.agregarLibros(l1);

b1.buscar('tit1')

b1.prestar(l1)
console.log(l1.disponible);
b1.prestar(l1)