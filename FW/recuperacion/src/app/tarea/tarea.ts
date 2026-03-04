import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.html',
  styleUrls: ['./tarea.css']
})
export class TareaComponent {
  //recibir datos del padre
  @Input() datos: any;

  //enviar eventos al padre
  @Output() cambioEstado = new EventEmitter();

  marcar() {
    this.cambioEstado.emit();
  }
}