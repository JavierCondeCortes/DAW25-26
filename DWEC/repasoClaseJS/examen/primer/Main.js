import bailarines from "./bailarines.js";
import profesores from "./profesores.js";
import festival from "./festival.js"; 

let f1 = new festival("festival1");

let par1 = new bailarines("alicia","carlos","perez","gargola","basico");
let pro1 = new profesores("alicia","carlos","perez","gargola","basico","basico");
let pro2 = new profesores("carrrlooss","aaaliciass","perez","gargola","basico","basico");

// console.log(par1.nombrePareja);
f1.agregarProfesores = pro1;
f1.agregarProfesores = pro2;

