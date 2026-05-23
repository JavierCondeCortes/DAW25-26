import {edificio} from "./edificio.js";

//creacion de edificio

let e1 = new edificio("manzanar nº3",3,4701,3,3); 

e1.verEdificio();
e1.asignarPuerta("carlos",1,2);
e1.asignarPuerta("maria",1,3);
e1.asignarPuerta("alejandro",2,1);
e1.asignarPuerta("carla",3,3);

e1.verEdificio();