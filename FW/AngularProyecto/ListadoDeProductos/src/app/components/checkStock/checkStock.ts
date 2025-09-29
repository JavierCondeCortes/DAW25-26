import { ListaProductos } from "../listaProductos/listaProductos";

export class CheckStock {
  listaStock: ListaProductos;
  variableSinStock: string[];
  variableConStock: string[];

  constructor() {
    this.listaStock = new ListaProductos();

    this.variableSinStock = [];
    this.variableConStock = [];

    if (this.listaStock.productos.some(producto => producto.stock === false)) {
      this.variableSinStock = this.listaStock.productos
        .filter(producto => producto.stock === false)
        .map(producto => producto.nombre);
    } else {
      this.variableConStock = this.listaStock.productos
        .filter(producto => producto.stock === true)
        .map(producto => producto.nombre);
    }
  }
}
