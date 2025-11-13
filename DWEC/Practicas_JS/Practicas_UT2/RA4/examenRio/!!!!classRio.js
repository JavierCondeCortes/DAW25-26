// export default rio;

class rio{
    #nombre; 
    #cuenca; 
    #caudalMedio;
    #poblacion;

    constructor(nombre,cuenca,caudalMedio,poblacion){
        this.#nombre = nombre;
        this.#cuenca = cuenca;
        this.#caudalMedio = caudalMedio;
        this.#poblacion = poblacion;
    }

    set poblacion(nombre){
        new this.#poblacion == nombre;
    }

    get nombre(){
        return this.#nombre;
    }
}

rio.poblacion = "valladolid";
rio.poblacion = "madrid";
console.log(rio.poblacion);
rio.nombre;