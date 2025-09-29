import { Component } from '@angular/core';
import { CheckStock } from '../checkStock/checkStock';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.html',
  styleUrls: ['./listado.css']
})
export class Listado {
  productosSinStock: string[] = [];
  productosConStock: string[] = [];

  constructor() {
    const checker = new CheckStock();
    this.productosSinStock = checker.variableSinStock;
    this.productosConStock = checker.variableConStock;
  }
}
