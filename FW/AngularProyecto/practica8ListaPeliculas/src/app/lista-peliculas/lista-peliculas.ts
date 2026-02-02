import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  imports: [],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas {

  constructor(private http: HttpClient){ };
  retornar(){
    // return this.http.get();
  }
}
