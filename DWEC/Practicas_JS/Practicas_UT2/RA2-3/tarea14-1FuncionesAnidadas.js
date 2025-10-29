function calcular(numero,cantidad,accion) {


    function incrementar(valor) {
        return numero+valor;
    }


    function decrementar(valor) {
        return numero-valor;
    }


    if(accion=='+') resultado = incrementar(cantidad);
    if(accion=='-') resultado = decrementar(cantidad);


    return resultado;
}


console.log(calcular(35,6,'+'));
console.log(calcular(47,9,'-'));function calcular(numero,cantidad,accion) {


    function incrementar(valor) {
        return numero+valor;
    }


    function decrementar(valor) {
        return numero-valor;
    }


    if(accion=='+') resultado = incrementar(cantidad);
    if(accion=='-') resultado = decrementar(cantidad);


    return resultado;
}


console.log(calcular(35,6,'+'));
console.log(calcular(47,9,'-'));