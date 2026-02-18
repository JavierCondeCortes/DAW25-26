// import { Festival } from "./Festival";

export class Registro{
    #nombrePareja

    constructor(nombre1,apellidos1,nombre2,apellidos2,nivel){
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;

        this.apellido1=apellidos1;
        this.apellidos2=apellidos2;

        if(nivel==='inicial' || nivel==='intermedio' || nivel==='avanzado'){
            this.nivel=nivel;
        }else{
            console.log('el nivel no se concretó bien, inicial, intermedio, avanzado');
        }
        this.#nombrePareja='';
        this.profesores=false;


        this.calcularNombrePareja()
    }

    calcularNombrePareja(){
        let n1='';
        let n2='';

        for(let i=0; i<this.nombre1.length; i++){
            if(i%2!==0){
                n1 += this.nombre1.slice(i,i+1);
            }
        }
        for(let i=0; i<this.nombre2.length; i++){
            if(i%2!==0){
                n2 += this.nombre2.slice(i,i+1);
            }
        }
        this.#nombrePareja = n1+n2
    }

    get nombrePareja(){
        return this.#nombrePareja;
    }
}

