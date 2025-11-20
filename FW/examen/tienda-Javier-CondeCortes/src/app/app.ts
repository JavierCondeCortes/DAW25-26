import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from '../listado-productos/listado-productos';
import { DetalleProducto } from '../detalle-producto/detalle-producto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListadoProductos, DetalleProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('tienda-Javier-CondeCortes');

  // mensaje = "";

  // actualizado(pulso:string){
  //   this.mensaje = "pulsado";
  // }

  // oferta(oferta: string){
  //   this.mensaje = "oferta aplicada";
  // }

    protected readonly title = signal('tienda-Javier-CondeCortes');
  mensaje = "";

  actualizado(pulso: string) {
    this.mensaje = pulso;
  }

  oferta(oferta: string) {
    this.mensaje = oferta;
  }
}

