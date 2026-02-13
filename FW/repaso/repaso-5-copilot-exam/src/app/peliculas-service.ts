import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
   generos = [
    'accion',
    'drama',
    'comedia',
    'terror'
  ]

  getGeneros(){
    return this.generos
  }
}
