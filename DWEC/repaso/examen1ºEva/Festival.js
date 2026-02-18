// import { Registro } from "./Registro";
// import { Profesoress } from "./Profesores.js";
export class Festival {
    #participantes
    constructor(fecha, nombre, provincia) {
        this.fecha = fecha;
        this.nombre = nombre;
        this.provincia = provincia;
        this.#participantes = [];
        this.profesorado = new Map;
    }

    fecha(fecha) {
        if (fecha !== '') {
            this.fecha = fecha;
        } else {
            let añoActual = new Date().getFullYear();
            let viernes = new Date(añoActual, 0, 1); // 1 de enero del año actual

            // Día de la semana del 1 de enero
            let diaSemana = viernes.getDay();
            // 0=domingo, 1=lunes, ..., 5=viernes

            // Cuántos días faltan hasta el viernes
            let diasHastaViernes = (5 - diaSemana + 7) % 7;

            // Sumamos esos días
            viernes.setDate(viernes.getDate() + diasHastaViernes);

            // Guardamos la fecha final
            this.fecha = viernes;

        }
    }

    agregarRegistro(pareja) {
        this.#participantes.push(pareja)
    }

    asignarProfesorado(nivel, grupo) {
        this.niveles = ['inicial', 'intermedio', 'avanzado'];

        const cursoValido = grupo.cursos.includes(nivel)
            && this.niveles.includes(nivel);

        if (cursoValido) {
            if(!this.profesorado.has(nivel)){
                this.profesorado.set(nivel, grupo);
            }else{
                console.log('categoria de baile ya agregada')
            }
        }else{
            console.log('algun valor no coincide')
        }

    }
}