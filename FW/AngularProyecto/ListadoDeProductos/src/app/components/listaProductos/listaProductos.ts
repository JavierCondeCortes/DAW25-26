export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: boolean;
}

export class ListaProductos {
  productos: Producto[];

  constructor() {
    this.productos = [
      { id: 1, nombre: "pechugas", precio: 1.5, stock: true },
      { id: 2, nombre: "desinfectante", precio: 3.5, stock: false },
      { id: 3, nombre: "pc", precio: 549.99, stock: true }
    ];
  }
}
