console.log(var1); // undefined
var var1 = 10;
console.log(var1); // 10
var var1;
console.log(var1); // 10
var var1 = 10;
console.log(var1); // 10

console.log(var2); // undefined
{
    console.log (var2); // undefined
    var var2 = 3;
    console.log(var2); //3
}

saludar("hola");

function saludar(saludo){
    console.log(saludo); //hola
}