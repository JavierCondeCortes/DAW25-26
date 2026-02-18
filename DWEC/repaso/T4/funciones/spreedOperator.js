console.log('original')
let valor = [1,2,3,4,5,6];
console.log(valor)


console.log('copia')
let copia = [...valor];
console.log(copia)

//simple
console.log('simple')
function f1(a,b,c){
    return a+b+c
}

console.log(f1(...valor))


//mal ejemplo
console.log('mal ejemplo')
function f2(a,b,...c){
    return a+b+c
}

console.log(f2(...valor))


//buen ejemplo
console.log('buen ejemplo')
function f3(...valores){
    valorTotal=0;
    for (const valor of valores) {
        valorTotal+=valor;
    }
    console.log(valorTotal);
}

f3(...valor)