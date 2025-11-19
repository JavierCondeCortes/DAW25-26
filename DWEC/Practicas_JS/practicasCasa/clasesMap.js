class InventarioMap {
    #productos;

    constructor() {
        this.#productos = new Map(); // clave: nombre, valor: objeto con datos
    }

    agregar(nombre, precio, categoria) {
        this.#productos.set(nombre, { precio, categoria });
    }

    eliminar(nombre) {
        return this.#productos.delete(nombre);
    }

    obtener(nombre) {
        return this.#productos.get(nombre) || null;
    }

    filtrarPorCategoria(categoria) {
        let resultado = [];
        for (let [nombre, datos] of this.#productos) {
            if (datos.categoria === categoria) {
                resultado.push({ nombre, ...datos });
            }
        }
        return resultado;
    }

    total() {
        return this.#productos.size;
    }

    mostrarTodos() {
        for (let [nombre, datos] of this.#productos) {
            console.log(`${nombre}: €${datos.precio} (${datos.categoria})`);
        }
    }
}

const tiendaMap = new InventarioMap();
tiendaMap.agregar("Camiseta", 20, "ropa");
tiendaMap.agregar("Zapatos", 50, "calzado");
tiendaMap.agregar("Pantalón", 35, "ropa");

tiendaMap.mostrarTodos();
// Camiseta: €20 (ropa)
// Zapatos: €50 (calzado)
// Pantalón: €35 (ropa)

console.log(tiendaMap.filtrarPorCategoria("ropa"));
// [{nombre: "Camiseta", ...}, {nombre: "Pantalón", ...}]

