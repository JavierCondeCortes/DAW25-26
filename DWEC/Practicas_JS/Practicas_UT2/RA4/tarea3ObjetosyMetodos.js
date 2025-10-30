let u1 = {
    nombre:"pepe",
    ver: function(){
        console.log(this.nombre);
    }
}
u1.ver();

//creacion de objeto que se puede llamar padre

const presona = {
    visualaizar(){
        console.log(this);
    }
};
const estudiante = Object.create(presona);
estudiante.nombre = "Pedro";
estudiante.visualaizar() //{nombre: "pedro"}