import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { PeliculasService } from './peliculas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  peliculas: any;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.retornar()
      .subscribe(result => this.peliculas = result)
  }

}