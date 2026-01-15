import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  id!: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }
}

