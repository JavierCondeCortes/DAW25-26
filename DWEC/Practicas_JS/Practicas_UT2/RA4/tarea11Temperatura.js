    const maxTemp = 40;
    const minTemp = -20;

class registroTemperatura{
    #ciudad;
    #dias;
    #temperatura;

    constructor(ciudad, dias = 30, temperatura = Math.floor(Math.random()*(minTemp-maxTemp+1))+maxTemp){
        this.#ciudad = ciudad;
        this.#dias =  dias;
        this.#temperatura = [] ?? temperatura;
    }

    //remove o editar,agregar ciudad
    set ciudad(nuevaCiudad){
        if(nuevaCiudad == 0){
            // delete temperatura.ciudad;
            this.#ciudad = null;
        }else{
            this.#ciudad = nuevaCiudad;
        }
    }

    //establecer,modificar temperatura
    set temperatura(nuevaTemperatura){
        this.#temperatura = nuevaTemperatura[[]];
    }

    generacionRegistro(){
        let arrayRegistro = [];
        for(let i=0; i<this.#dias; i++){
            arrayRegistro.push(Math.floor(Math.random()*(minTemp-maxTemp+1))+maxTemp)
            this.#temperatura = arrayRegistro;
        }
        const Registro = new registroTemperatura(this.#ciudad,arrayRegistro)
        
        const media = (arrayRegistro.reduce((ac, n) => ac + n))/(arrayRegistro.length);

        console.table("ciudad: " + this.#ciudad +" Temperaturas: "+arrayRegistro +" media: "+ media)
    }
}

const ciudad1 = new registroTemperatura("Oviedo");
ciudad1.generacionRegistro();

const ciudad2 = new registroTemperatura("Valladolid")
ciudad2.generacionRegistro();