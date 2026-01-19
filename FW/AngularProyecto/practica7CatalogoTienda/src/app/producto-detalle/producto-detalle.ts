import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Productos } from '../productos/productos';

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  id!: string;
  objeto: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.objeto = Productos.objetos.find(p => p.ID === this.id);
  }

}

