class Item {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito {
    constructor() {
        this.Items = [];
    }

    agregar(item) {
        this.Items.push(item);
        console.log('item agregado')
    }

    eliminar(nombre) {
        const pos = this.items.findIndex(item => item.nombre === nombre);
        if (pos !== -1) {
            this.items.splice(pos, 1);
            console.log("Item eliminado");
        } else {
            console.log("Item no encontrado");
        }
    }


    calularTotal() {
        let precioTotal = 0;
        this.Items.forEach(item => precioTotal += (item.precio * item.cantidad))
        console.log(precioTotal)
    }

}

const i1 = new Item('macarrones', 10, 1);
const i2 = new Item('chocolate', 30, 2);
const i3 = new Item('turron', 5, 2);

const c1 = new Carrito;
c1.agregar(i1);
c1.agregar(i2);
c1.agregar(i3);

c1.calularTotal();

