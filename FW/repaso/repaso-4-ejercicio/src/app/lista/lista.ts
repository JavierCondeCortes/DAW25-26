import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Peliculas } from '../peliculas';

@Component({
  selector: 'app-lista',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  peliculas: any; 

  constructor(private peliculasService: Peliculas){
    this.peliculas=this.peliculasService.retornar();
  }
}
