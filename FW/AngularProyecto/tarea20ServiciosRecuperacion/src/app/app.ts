import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulos } from './articulos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  articulos:any;
  constructor(private articulosService: Articulos){
    articulosService.retornar().subscribe(result => this.articulos = result);
  }
}
