import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Articulos {

  constructor(private http: HttpClient){}
  retornar(){
    return this.http.get('https://ejerciciostutorialesya.com/vue/datos.php')
  }
}
