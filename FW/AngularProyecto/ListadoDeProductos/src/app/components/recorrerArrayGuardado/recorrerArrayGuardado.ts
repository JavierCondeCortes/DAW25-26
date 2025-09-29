import { ListaProductos } from "../listaProductos/listaProductos";

export class RecorrerArrayGuardado {
  nombresProductos: string[];

  constructor() {
    const lista = new ListaProductos();

    this.nombresProductos = lista.productos.map(producto => producto.nombre);

    console.log(this.nombresProductos);
  }
}
