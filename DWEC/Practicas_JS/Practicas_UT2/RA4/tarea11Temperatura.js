    const MAXTEMP = 40;
    const MINTEMP = -20;

class RegistroTemperatura{
    #ciudad;
    #dias;
    #temperaturas;

    constructor(ciudad, dias = 30, temperaturas){
        this.#ciudad = ciudad;
        this.#dias =  dias;
        this.#temperaturas = temperaturas;
    }

    //remove o editar,agregar ciudad
    set ciudad(nuevaCiudad){
        this.#ciudad = nuevaCiudad;
    }

    //establecer,modificar temperaturas
    set temperaturas(nuevaTemperaturas){
        this.#temperaturas = nuevaTemperaturas;
    }

    generacionRegistro(){
        //ELIMINACIO DE VALORES AUXILIARES
        // let arrayRegistro = [];
        for(let i=0; i<this.#dias; i++){
            // arrayRegistro.push(Math.floor(Math.random()*(MINTEMP-MAXTEMP+1))+MAXTEMP)
            this.#temperaturas.push(Math.floor(Math.random()*(MINTEMP-MAXTEMP+1))+MAXTEMP)
            // this.#temperaturas = arrayRegistro;
        }
        
        const media = (arrayRegistro.reduce((ac, n) => ac + n))/(arrayRegistro.length);

        console.table("ciudad: " + this.#ciudad +" Temperaturas: "+arrayRegistro +" media: "+ media)
    }
}

const ciudad1 = new RegistroTemperatura("Oviedo");
ciudad1.generacionRegistro();

const ciudad2 = new RegistroTemperatura("Valladolid")
ciudad2.generacionRegistro();
