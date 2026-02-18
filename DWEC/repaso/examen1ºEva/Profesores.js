import { Registro } from "./Registro.js";

export class Profesoress extends Registro {
    constructor(nombre1, apellido1, nombre2, apellidos2, nivel, ...cursosProfesor) {
        super(nombre1, apellido1, nombre2, apellidos2, nivel)
        this.profesores = true;

        const nivelesValidos = ['inicial', 'intermedio', 'avanzado']
        this.cursos = [];

        for (const curso of cursosProfesor) {
            if (nivelesValidos.includes(curso)) {
                this.cursos.push(curso);
            } else {
                console.log(`El curso "${curso}" no es válido`);
            }
        }
    }
}

