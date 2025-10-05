import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class ProductoComponent {
  @Input() producto!: { id: number; nombre: string; precio: number; stock: boolean };
}
