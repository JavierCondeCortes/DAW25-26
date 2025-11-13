//alternar palabras mayusc con minusc
//escribir texto sin tildes
//texto al revers a nivel de palabras y letras

var texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String";

//alternar palabras mayusc con minusc

let alternancia = texto.split(" ");

for(let i=0;i<alternancia.length;i++){
    if(i%2===0){
        alternancia[i] = alternancia[i].toUpperCase();
    }else{
        alternancia[i] = alternancia[i].toLowerCase();
    }
}

console.log(alternancia)

//escribir texto sin tildes !!!!!

// let sinTildes = texto;
// console.log(sinTildes);

// let j = 0;
// let valor = sinTildes.charAt(j);

// for(j;j<=sinTildes.length;j++){
//     switch(valor){
//         case "á":
//             valor.replace("á","a");
//             break;
//         case "é":
//             valor.replace("é","e");
//             break;
//         case "í":
//             valor.replace("í","i");
//             break;
//         case "ó":
//             valor.replace("ó","o");
//             break;
//         case "ú":
//             valor.replace("ú","u");
//             break;
//     }
// }

// console.log(sinTildes);


//texto al reves a nivel de palabras y letras !!!!!!!!!!!!

// let textReversa = texto.split(" ");

// console.log(textReversa.reverse()); 

// for(let k=0;k<=textReversa.length;k++){
//     for(let h;h<=textReversa.length[k];h++){
//         let arraychar = [];
//         textReversa[k].charAt();   
//     }
// }
// console.log(textReversa);
