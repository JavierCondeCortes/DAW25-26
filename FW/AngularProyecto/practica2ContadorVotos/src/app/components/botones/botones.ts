import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botones.html',
  styleUrls: ['./botones.css']
})
export class Botones {
  opciones = [
    { id: 1, nombre: "pizza", votos: 0 },
    { id: 2, nombre: "hamburguesa", votos: 0 },
    { id: 3, nombre: "tacos", votos: 0 }
  ];

  resultado: string = 'Aún no hay votos';

  votar(id: number) {
    // Incrementar votos usando for + if
    for (let i = 0; i < this.opciones.length; i++) {
      if (this.opciones[i].id === id) {
        this.opciones[i].votos++;
        break;
      }
    }

    // Calcular el máximo de votos
    let maxVotos = -1;
    for (let i = 0; i < this.opciones.length; i++) {
      if (this.opciones[i].votos > maxVotos) {
        maxVotos = this.opciones[i].votos;
      }
    }

    // Buscar cuántos tienen ese máximo
    let ganadores = [];
    for (let i = 0; i < this.opciones.length; i++) {
      if (this.opciones[i].votos === maxVotos) {
        ganadores.push(this.opciones[i].nombre);
      }
    }

    // Mostrar resultado
    if (maxVotos === 0) {
      this.resultado = 'Aún no hay votos';
    } else if (ganadores.length === 1) {
      this.resultado = `Ganador actual: ${ganadores[0]}`;
    } else {
      this.resultado = 'Empate entre varias opciones';
    }
  }
}
