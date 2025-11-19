











//debio a la exportacion me marca este warning aunque el codigo sigue funcionando bien
// ( (node:2588) [MODULE_TYPELESS_PACKAGE_JSON] is not specified and it doesn't parse as CommonJS. )
//pero creo que solo es en la configuracion del package_json de mi equipo.

export default class Equipo{
    #id;
    #fecha;
    #descripcion;
    #personal;
    #dias

    constructor(descripcion, personal, dias ){
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#dias = dias;
    }

    //--set y get
    // set dias(cantidadDias){
    //     this.dias = cantidadDias;
    // }

    set descripcion(nuevaDescripcion){
        this.#descripcion = nuevaDescripcion;
    }

    set personal(nuevoPersonal){
        this.#personal = nuevoPersonal;
    }

    // get dias(){
    //     return this.dias;
    // }

    get id(){
        return this.#id;
    }

    //--metodos
    calcularFecha(dias){
        this.dias = dias;

        let FechaActual = new Date();
        if(dias == 0){ //este caso no le pude sacar
            this.#fecha = new Date(Date.parse(FechaActual.getFullYear() +"-"+ FechaActual.getMonth() +"-"+ FechaActual.getDate())-
                        Date.parse("06-30"));
            console.log("la fecha de estimacion es: " + this.#fecha);
            
        }else{
            //no hubiera hecho la variable auxiliar, pero se concatena como si fuera un string
            let diaEstimacion =  FechaActual.getDate() + dias;
            this.#fecha = FechaActual.getFullYear() +"-"+ FechaActual.getMonth() +"-"+ diaEstimacion;
            console.log ("la fecha de estimacion es: " + this.#fecha);
        }
    }

    CodigoId(letraEquipo){
        if(letraEquipo === "S" || letraEquipo === "P"){
            if(letraEquipo === "S"){
                this.#personal = false;
            }else{
                this.#personal = true;
            }

            let letras=[];
            for(let i=this.#descripcion.length-3;i<this.#descripcion.length;i++){
                letras.push(this.#descripcion.charAt(i));
            }
            this.#id = letraEquipo +"-"+ letras.join("") +"-"+ new Date().getDate() +"-"+ new Date().getMonth() +"-"+ new Date().getFullYear();
            console.log("el codigo es: "+this.#id);
        }else{
            console.log("solo aceptan caracteres (S)sobremesa y (P)portatil");
        }
    }
}