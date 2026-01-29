import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://ejerciciostutorialesya.com/vue/datos.php");
  }  
}