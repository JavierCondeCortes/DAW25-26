//nombradas
function hello(nombre){
    console.log('hola '+ nombre)
}
hello('javier');

//anonimas
let hola = function(nombre){
    return(`hola ${nombre}`)
}

console.log(hola("javier"))