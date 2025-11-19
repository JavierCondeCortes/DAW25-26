export class RegistroFestival {
    #nombre;
    #provincia;
    #fecha;

    constructor(nombre, provincia, fecha) {
        this.#nombre = nombre;
        this.#provincia = provincia
        this.#fecha = fecha ?? this.fechaDefault();
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
    get nombre() {
        return this.#nombre;
    }

    set provincia(nombreProvincia) {
        this.#provincia = nombreProvincia;
    }
    get provincia() {
        return this.#provincia;
    }

    set fecha(nuevaFecha) {
        this.fechaCoincidencia(nuevaFecha);
    }
    get fecha() {
        return this.#fecha;
    }
    
    fechaDefault() {
        //siento la variable auxiliar
        let fecha = new Date;
        if (fecha.getFullYear() + "-00+01" < fecha.getFullYear() + "-" + fecha.getMonth() + "-" + fecha.getDate()) {
            return `${fecha.getFullYear() + 1}-00-01`;
        } else {
            return `${fecha.getFullYear()}-00-01`;
        }
    }

    fechaCoincidencia(fecha) {
        let listaFechas = [];
        listaFechas.forEach(dia => {
            if (dia == fecha && this.#provincia == nombreProvincia) {
                this.#fecha = fecha;
                listaFechas.push(fecha);
            } else {
                this.#fecha ="la fecha propuesta existe en diferente provincia";
            }
        });
    }

}