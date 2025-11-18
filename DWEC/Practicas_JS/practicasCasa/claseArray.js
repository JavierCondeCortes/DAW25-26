class InventarioArray {
    #productos;

    constructor() {
        this.#productos = []; // cada elemento es { nombre, precio, categoria }
    }

    agregar(nombre, precio, categoria) {
        this.#productos.push({ nombre, precio, categoria });
    }

    eliminar(nombre) {
        this.#productos = this.#productos.filter(p => p.nombre !== nombre);
    }

    obtener(nombre) {
        return this.#productos.find(p => p.nombre === nombre) || null;
    }

    filtrarPorCategoria(categoria) {
        return this.#productos.filter(p => p.categoria === categoria);
    }

    total() {
        return this.#productos.length;
    }

    mostrarTodos() {
        this.#productos.forEach(p =>
            console.log(`${p.nombre}: €${p.precio} (${p.categoria})`)
        );
    }
}

const tiendaArray = new InventarioArray();
tiendaArray.agregar("Gorra", 15, "accesorios");
tiendaArray.agregar("Bufanda", 25, "accesorios");
tiendaArray.agregar("Sudadera", 40, "ropa");

tiendaArray.mostrarTodos();
// Gorra: €15 (accesorios)
// Bufanda: €25 (accesorios)
// Sudadera: €40 (ropa)

console.log(tiendaArray.filtrarPorCategoria("accesorios"));
// [{nombre: "Gorra", ...}, {nombre: "Bufanda", ...}]

