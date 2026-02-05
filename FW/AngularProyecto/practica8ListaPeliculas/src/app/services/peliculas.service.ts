import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

    retornar(): Observable<Pelicula[]>{
      // Lee el JSON local desde `src/assets/peliculas.json`
      return this.http.get<Pelicula[]>('/assets/peliculas.json');
    }
}