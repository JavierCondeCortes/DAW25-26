console.log("VAR");
var var1 = 1;
if (true) {
    var var1 = 2;
    console.log("var 1 = "+var1);
}
console.log("var 1 = " + var1);

console.log("LET");
let var2 = 1;
if (true){
    let var2 = 2;
    console.log("var2 = " + var2);
}
console.log("var2 = "+ var2);

console.log(var3); // undefined
let var3 = 1; //ERROR --> Cambiar let por var para que no se produzca un error
            //Cannot access 'var3' before initialization
console.log(var3);