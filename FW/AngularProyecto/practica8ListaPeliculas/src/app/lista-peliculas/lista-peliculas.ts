import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-peliculas',
  imports: [RouterOutlet],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas {
  peliculas:any;

  constructor(private peliculasService: PeliculasService){
    this.peliculasService.retornar()
    .subscribe(result=> this.peliculas = result);
  }
}
