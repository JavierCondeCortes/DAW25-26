import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Articulos {
  retornar(){
    return [
      {
        codigo:0,
        descripcion:'salchicha??',
        precio:14.3,
      },
      {
        codigo:1,
        descripcion:'zapatos',
        precio:12.1,
      },
      {
        codigo:1,
        descripcion:'boloñesa',
        precio:12.2,
      },
      {
        codigo:3,
        descripcion:'patata',
        precio:12.3
      }
    ]
  }
}
