//clases

class personaClass{
    #nombre
    #edad
    #pais
    constructor(nombre,edad,pais="españa"){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#pais = pais;
    }

    // ERROR at get edad (e:\DAW25-26\DWEC\repasoClaseJS\9-15MarzoFuncionesObjetos\objetos.js:43:21) //FALTABA # en edad "#edad"

    get nombre(){
        return this.#nombre;
    }

    get edad(){
        return this.#edad;
    }

    get pais(){
        return this.#pais;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set edad(edad){
        this.#edad = edad;
    }

    set pais(pais){
        this.#pais = pais;
    }

    saludar(nombre) {
        console.log(`hola buenas tardes ${nombre}, soy ${this.#nombre}`);
    }

    toString(){
        console.log( `hola, soy ${this.#nombre}, tengo ${this.#edad} años, soy de ${this.#pais} :D`);
    }
}

let pc1 = new personaClass("javier",21);

pc1.saludar("andy");

pc1.toString();

pc1.pais = "paisNuevo"
pc1.nombre = "gilbert"
pc1.edad = 8

pc1.toString();


//extends hace herencia
class empleado extends personaClass{
    #empresa
    #cargo
    constructor(nombre,edad,pais,empresa,cargo){
        super(nombre,edad,pais);
        this.#empresa = empresa;
        this.#cargo = cargo;
    }

    get empresa(){
        return this.#empresa;
    }

    get cargo(){
        return this.#cargo;
    }

    set empresa(empresa){
        this.#empresa = empresa
    }

    set empresa(cargo){
        this.#cargo = cargo
    }

    fichar(){
        let fecha = new Date();
        console.log(`${this.nombre} fichó en ${this.#empresa} a la hora ${fecha}`)
    }

    toString(){
        console.log( `hola, soy ${this.nombre}, tengo ${this.edad} años, soy de ${this.pais} y trabajo en ${this.#empresa} como ${this.#cargo}`);
    }
}

emp1 = new empleado ("pedro",18,"españa","serbatic","programador");

emp1.fichar();
emp1.toString();

