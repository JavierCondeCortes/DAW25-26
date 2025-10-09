import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Botones } from './components/botones/botones';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Botones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica2ContadorVotos');
  
}


