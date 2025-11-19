export class RegistroBailarines{
    #nombre1;
    #apellido1;
    #nombre2;
    #apellido2;
    #nivel;
    #nombreGrupo;

    constructor(nombre1,apellido1,nombre2,apellido2,nivel,nombreGrupo){
        this.#nombre1 = nombre1;
        this.#apellido1 = apellido1;
        this.#nombre2 = nombre2;
        this.#apellido2 = apellido2;
        this.#nivel = nivel;
        this.#nombreGrupo = this.nombrePareja;//funcion de asignacion de nombre
    }

    get nombre1(){
        return this.#nombre1;
    }
    get nombre2(){
        return this.#nombre2;
    }
    get apellido1(){
        return this.#apellido1;
    }
    get apellido2(){
        return this.#apellido2;
    }
    get nivel(){
        return this.#nivel;
    }
    get nombreGrupo(){
        return this.#nombreGrupo;
    }

    set nombre1(nuevoNombre1){
        this.#nombre1 = nuevoNombre1;
    }
    set nombre2(nuevoNombre2){
        this.#nombre2 = nuevoNombre2;
    }
    set apellido1(nuevoApellido1){
        this.#apellido1 = nuevoApellido1;
    }
    set apellido2(nuevoApellido2){
        this.#apellido2 = nuevoApellido2;
    }
    set nivel(nuevoNivel){
        this.condicionNivel(nuevoNivel);
    }

    condicionNivel(nivel){
        if(nivel == "inicial" || "intermecio" || "avanzado"){
            this.#nivel = nivel;
        }else{
            this.#nivel = "error en nivel";
        }
    }

    nombrePareja(){
        //siento la variable auxiliar
        //pongo que no sea resto 2 porque al empezar por cero, el valor par sera la letra impar

        //FALTA CONTAR LA CANTIDAD DE CARACTERES DE CADA NOMBRE CON LENGTH NO FUNCIONA
        //PONGO VALORES ESTATICOS PARA DEMOSTRAR QUE FUNCIONA
        //intente hacerlo mediante desestructuracion, intente con el length y no me salio
        let nombreGrupo=[];
        for(let i=0; i<10; i++){
            if (i%2!=0){
                nombreGrupo.push(this.#nombre1[i]);
            }
        }
        for(let i=0; i<10; i++){
            if (i%2!=0){
                nombreGrupo.push(this.#nombre2[i]);
            }
        }
        return nombreGrupo.join("").toLocaleUpperCase();
    }

}