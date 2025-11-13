let cantidad = new Set ();

//ADD
console.log("---ADD---")
cantidad.add("a");
cantidad.add("b");
cantidad.add("c");
cantidad.add("c"); //no cuenta las repeticiones

console.log(cantidad); //Set(3) {size: 3, a, b, c}

//SIZE
console.log("--- SIZE ---")
console.log(cantidad.size);

//DELETE
console.log("--- DELETE ---")
cantidad.delete("c"); //aun habiendo duplicados estos son eliminados

console.log(cantidad); //Set(2) {size: 2, a, b}

//HAS
console.log("--- HAS ---")
let busqueda = cantidad.has("b")

console.log(busqueda); //true

//VALUES
console.log("--- VALUES ---")
let iterables = cantidad.values()

console.log(iterables); //SetIterator {a, b}

//CLEAR
console.log("--- CLEAR ---")
cantidad.clear();
console.log(cantidad); // Set(0) {size: 0}


//RETO
console.log("--- RETO ---");

let array = [100,23,23,23,23,67,45];

    //FORMA 1 (RECORRER ARRAY MEDIANTE FOR)
    console.log("RECORRER ARRAY MEDIANTE FOR");

    function orden(a,b){
        return a-b;
    }

    array.sort(orden);

    for(let i=0; i<array.length;i++){
        if(array[i] == array[i+1]){
            array.splice(i+1,1);
            i--;
        }
    }
    console.log(typeof(array));
    console.log(array)

    //FORMA 2 (RECORRER ARRAY MEDIANTE FROM ARRAY Y OBJETO SET)
    console.log("RECORRER ARRAY MEDIANTE FROM ARRAY Y OBJETO SET")

    let ObjetoSet = new Set(array);
    console.log(typeof(ObjetoSet));
    console.log(ObjetoSet);

    let ArraySet = Array.from(ObjetoSet);
    console.log(ArraySet);