import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './components/eventos/eventos';
import { EnlacesPrioridad } from './components/enlaces-prioridad/enlaces-prioridad';
import { PadreHijo } from './components/padre-hijo/padre-hijo';
import { HijoPadre } from './components/hijo-padre/hijo-padre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Eventos, EnlacesPrioridad,PadreHijo, HijoPadre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  valor1: number = this.retornarAleatorio()
  resultado: string = "";

  //----------------padrehijo

  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
  }

  //-----------------hijopadre

    mensaje = '';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}

