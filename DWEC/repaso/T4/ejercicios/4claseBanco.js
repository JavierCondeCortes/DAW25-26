class CuentaBancaria{
    #titular
    #saldo
    constructor(titular,saldo){
        this.#titular = titular
        this.#saldo = saldo
    }

    depositar(sumaSaldo){
        this.#saldo+=sumaSaldo;
    }

    retirar(restaSaldo){
        if(restaSaldo<this.#saldo){
            this.#saldo-=restaSaldo;
        }else{
            console.log('el saldo no puede ser negativo')
        }
    }

    mostrarSaldo(){
        console.log('saldo = '+this.#saldo)
    }
}

const c1 = new CuentaBancaria('javier',30)
c1.mostrarSaldo()
c1.depositar(20);
c1.mostrarSaldo()
c1.retirar(70)
c1.mostrarSaldo()
c1.retirar(40)
c1.mostrarSaldo()