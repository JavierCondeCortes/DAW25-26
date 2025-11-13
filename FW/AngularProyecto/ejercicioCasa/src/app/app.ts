import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './components/eventos/eventos';
import { EnlacesPrioridad } from './components/enlaces-prioridad/enlaces-prioridad';
import { PadreHijo } from './components/padre-hijo/padre-hijo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Eventos, EnlacesPrioridad,PadreHijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  valor1: number = this.retornarAleatorio()
  resultado: string = "";

  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
  }
}
