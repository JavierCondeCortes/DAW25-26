import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../peliculas';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-lista-peliculas',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-peliculas.html',
  styleUrls: ['./lista-peliculas.css'],
})
export class ListaPeliculas {
  peliculas: any[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.retornar()
      .subscribe({
        next: result => {
          console.log('peliculas result:', result);
          this.peliculas = result || [];
          this.loading = false;
        }
      })
  }

}
