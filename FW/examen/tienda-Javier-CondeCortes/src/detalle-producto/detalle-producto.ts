import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  oferta = "";
  @Input() detalle: string = "";
  @Output() descuento = new EventEmitter<string>();

  
  pulsoOferta(){
    this.oferta = "oferta del 50%";
    this.descuento.emit(this.oferta);
  }
  
}
