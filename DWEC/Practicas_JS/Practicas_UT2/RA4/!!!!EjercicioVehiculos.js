class Vehiculo{
    constructor(pasajeros){
        this._pasajeros;
    }
}

class Camion extends Vehiculo{
    constructor(pasajeros,tara){
        super(pasajeros);
        this._tara = tara;
    }
}

class Turismos extends Vehiculo{
    constructor(pasajeros,color){
        super(pasajeros);
        this._color = color;
    }
}

function capturaRelog (){
    let fecha = new Date();
    console.log(fecha.getHours() +":"+ fecha.getMinutes() +":"+ fecha.getSeconds());
}

function generarVehiculos (){
    let nPasajeros = Math.floor(Math.random(1)+6,99);
    let tara = Math.floor(Math.random(1)+9998,99);
    let listaColor = ["azul","rojo","verde"];

    const nColor = Math.floor(Math.random()+listaColor.length+0,99);
    let color = listaColor[nColor];
}


function mostrarVehiculos() {
    let nTurismo = Math.floor(Math.random(1)+3,99);
    let nCamion = Math.floor(Math.random(1)+3,99);
}