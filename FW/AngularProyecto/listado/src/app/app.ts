import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './producto/producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('listado');

  protected readonly productos = signal([
    { id: 1, nombre: 'Teclado', precio: 25, stock: true },
    { id: 2, nombre: 'Ratón', precio: 15, stock: false },
    { id: 3, nombre: 'Monitor', precio: 120, stock: true },
  ]);

  protected readonly nombresProductos = signal(
    this.productos().map(p => p.nombre)
  );

  protected readonly haySinStock = signal(
    this.productos().some(p => !p.stock)
  );
}
