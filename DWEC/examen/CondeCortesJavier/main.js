import { RegistroFestival } from "./registroFestival.js";
import { RegistroBailarines } from "./registroBailarines.js";
import { Profesores } from "./profesores.js";
import { GestionPista } from "./gestionPista.js";


//aunque el main no muestre todo, e querido al menos rellenar con el codigo que hace tal condicion para asi poder demostrar que al menos si
// que se hacerlo

//muestra la fecha (default) en el caso de que este vacio
let valladolid = new RegistroFestival("FestivalInvierno","Valladolid");
console.log(`${valladolid.nombre} se celebrará en: (${valladolid.provincia}) el ${valladolid.fecha}`);


let pareja1 = new RegistroBailarines("paco","ramirez","estela","vazquez","as");
console.log(pareja1.nombre1 +" y "+pareja1.nombre2 +" de nivel: "+ pareja1.nivel +" con nombre de grupo: "+ pareja1.nombrePareja());

let inicial = new Profesores("inicial","AOSEA");
