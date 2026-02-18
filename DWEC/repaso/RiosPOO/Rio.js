class Rio {
    constructor(nombre, cuenca){
        this.nombre = nombre;
        this.cuenca = cuenca;
        this.poblacion = [];
        this.caudalMedio=0
    }

    agregarPoblacion(poblacion){
        if(!this.poblacion.includes(poblacion)){
            this.poblacion.push(poblacion)
        }else{
            console.log('la poblacion ya existe en este rio')
        }
    }
    eliminarPoblacion(poblacion){
        if(this.poblacion.includes(poblacion)){
            let index = this.poblacion.findIndex(element=>element===poblacion);
            this.poblacion.splice(index,1);
        }else{
            console.log('la poblacion no existe en la base de datos')
        }
    }
    modificarCaudal(numero){
        if(numero>0){
            this.caudalMedio=numero;
        }else{
            console.log('el caudal no puede ser negativo')
        }
    }

    get imprimirNombre(){
        return this.nombre;
    }

    get imprimirCaudalMedio(){
        if(this.caudalMedio!==0){
            return this.caudalMedio;
        }else{
            return 'no consta informacion'
        }

    }

    get imprimirCuenca(){
        return this.cuenca;
    }

    get imprimirPoblacion(){
        if(this.poblacion.length>0){
            return this.poblacion;
        }else{
            return 'no consta informacion';
        }
    }

    get imprimirRio(){
        return `nombre: ${this.imprimirNombre}
                cuenca: ${this.imprimirCuenca}
                caudalMedio: ${this.caudalMedio}
                poblaciones: ${this.imprimirPoblacion}
                `
    }
}

const rioA = new Rio('Duero','Atlantica')
const rioB = new Rio('Ebro','Mediterranea')

rioA.agregarPoblacion('overuela');
rioA.agregarPoblacion('elEntrego');
rioA.modificarCaudal(10);
console.log(rioA.imprimirRio);
rioA.eliminarPoblacion('overuela');
console.log(rioA.imprimirRio);


rioB.agregarPoblacion('miranda de ebro')
rioB.agregarPoblacion('tortosa')
rioB.agregarPoblacion('valladolid')
console.log(rioB.imprimirPoblacion)
rioB.eliminarPoblacion('valladolid')
console.log(rioB.imprimirPoblacion)