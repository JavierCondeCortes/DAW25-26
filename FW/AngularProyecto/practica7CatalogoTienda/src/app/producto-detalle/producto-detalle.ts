import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,RouterOutlet } from "@angular/router";
import { Productos, Producto } from '../productos/productos';

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  id!: number;
  objeto!: Producto;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.objeto = new Productos().lista.find(
      (p: Producto) => p.ID === this.id
    ) as Producto;
  }
}
