import { Component } from '@angular/core';
@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

  contador = 1;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
