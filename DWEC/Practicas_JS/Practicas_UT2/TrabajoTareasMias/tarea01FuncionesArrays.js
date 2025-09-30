let lista1 = [20,1,2,10];
let lista2 = Array("a","b",3);

        console.log("") //separación de linea

//length ///Cantidad de elementos en array
console.log("Length");
console.log(lista1.length); //4

        console.log("") //separación de linea

//concat //concatenación de arrays 1 y 2
console.log("Concat");
let lista3 = lista1.concat(lista2);
console.log(lista3); //(7) [20, 1, 2, 10, 'a', 'b', 3]

        console.log("") //separación de linea

//join //une elementos de un array y almacena en un string
console.log("Join");
console.log(lista1.join(".")); //20.1.2.10

        console.log("") //separación de linea

//pop //extrae la ultima posicion del array
console.log("Pop");
console.log(lista3); //7) [20, 1, 2, 10, 'a', 'b', 3]
console.log(lista3.pop()); //3
console.log(lista3); //(6) [20, 1, 2, 10, 'a', 'b']

        console.log("") //separación de linea

//push //permite añadir en la ultima posición
console.log("Push")
let count = lista3.push("5");
console.log(count); //7
console.log(lista3); //(7) [20, 1, 2, 10, 'a', 'b', '5']

        console.log("") //separación de linea

//shift //extrae primer elemento del array
console.log("shift");
console.log(lista3);//(7) [20, 1, 2, 10, 'a', 'b', '5']
let primerElemento = lista3.shift();
console.log(primerElemento); //20

        console.log("") //separación de linea

//unshift //añade un elemento al comienzo del array
console.log("unshift");
console.log(lista3); //(6) [1, 2, 10, 'a', 'b', '5']
console.log(lista3.unshift(2,"abc")); //8
console.log(lista3); // (8) [2, 'abc', 1, 2, 10, 'a', 'b', '5']

        console.log("") //separación de linea

//reverse //invierte posición de un array
console.log("reverse");
console.log(lista3); //(8) [2, 'abc', 12, 2, 3, 'a', 'b', '5']
console.log(lista3.reverse()); //(8) ['5', 'b', 'a', 3, 2, 12, 'abc', 2]

        console.log("") //separación de linea

//sort //ordena un array
console.log("sort");

    //funcion para poder ordenar numeros con el sort
    function CompararNumeros(a,b){
        return a-b;

    }

    let Pelos =["pelirojo","moreno","rubio","pelirojo","moreno","rubio"];

    //funcion para poder ordenar string con el sort // !!!!!
    function CompareColorPelo(a,b){
        let pelirojo = 0;
        let rubio = 1;
        let moreno = 2;

        if (a=="pelirrojo"){
                a=pelirojo;
        }else if(a=="rubio"){
                a=rubio;
        }else{
            a=moreno;
        }

        if (b=="pelirrojo"){
                b=pelirojo;
        }else if(b=="rubio"){
                b=rubio;
        }else{
            b=moreno;
        }

        if(a>b){
            return 1;
        }else{
            return -1;
        }
    }
console.log(Pelos)
console.log(Pelos.sort(CompareColorPelo))


console.log(lista1); //(4) [20, 1, 2, 10]
lista1.sort(CompararNumeros);
console.log(lista1); //(4) [1, 2, 10, 20]


        console.log("") //separación de linea

//indexof //devuelve la posicon de un elemento en el array
console.log("indexof");
console.log(lista3); //(8) [12, 2, 2, 3, '5', 'a', 'abc', 'b']
console.log(lista3.indexOf(2)); //1

//lastindexof //devuelve la posicon del ultimo elemento array
console.log("lastIndexOf")
console.log(lista3); //(8) [12, 2, 2, 3, '5', 'a', 'abc', 'b']
console.log(lista3.lastIndexOf(2)); //2

        console.log("") //separación de linea

//slice //devuelve nuevo array con parte de los elementos iniciales
console.log("slice");
console.log(lista3); // (8) ['5', 'b', 'a', 10, 2, 1, 'abc', 2]
console.log(lista3.slice(1,3)); //(2) ['b', 'a']

        console.log("") //separación de linea

//splice //cambia contenido array: inserta, remplaza, o borra elementos
console.log("splice");
console.log(lista2); //(3) ['a', 'b', 3]
lista2.splice(1,0,"agregación"); // ('posicion de accion','cantidad a eliminar')
console.log(lista2) //(4) ['a', 'agregación', 'b', 3]
lista2.splice(1,1,"remplazo");
console.log(lista2); // (4) ['a', 'remplazo', 'b', 3]
console.log(lista2.splice(1,1)); // (1) ['remplazo'] (el dato que elimina es mostrado en pantalla)

//For Array
let forArray = [21,23,32];

//For in
console.log("For in:")
for(let valorIndice in forArray){
    console.log (valorIndice); // 0
    console.log (forArray[valorIndice]); // 21
}

//for of
console.log("For of:")
for(let valorIterario of forArray){
    console.log (valorIterario);
}
