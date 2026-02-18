import { Festival } from "./Festival.js";
import { Registro } from "./Registro.js";
import { Profesoress } from "./Profesores.js";

const f1 = new Festival("18-02-2026",'aquaParty','badajoz')
const p1 = new Registro('pepe', 'alvilla', 'alfonso', 'giardiola', 'intermedio');
const pp1 = new Profesoress('javier', 'conde', 'emma', 'fernandez', 'inicial', 'avanzado','intermedio');
const pp2 = new Profesoress('juaqui', 'conde', 'lucia', 'fernandez', 'inicial', 'inicial','intermedio');

f1.agregarRegistro(p1)
f1.agregarRegistro(pp1)
f1.agregarRegistro(pp2)
f1.asignarProfesorado('avanzado',pp1)
f1.asignarProfesorado('intermedio',pp1)
f1.asignarProfesorado('inicial',pp2)
// f1.asignarProfesorado('intermedio',pp2)

