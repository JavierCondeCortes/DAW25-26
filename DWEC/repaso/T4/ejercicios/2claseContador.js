class Contador{
    #tiempo
    constructor(){
        this.#tiempo=0;
    }

    incrementar(incremento){
        this.#tiempo+=incremento;
    }
    decremento(decremento){
        this.#tiempo-=decremento;
    }

    valor(){
        return this.#tiempo;
    }
}

let p = new Contador;

console.log(p.valor())
p.incrementar(10);
console.log(p.valor())
p.decremento(3);
console.log(p.valor())