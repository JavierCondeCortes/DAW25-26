import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    peli = {
    codigo: 0,
    titulo: "",
    horario: "",
    butacasTotales: 0,
    butacasOcupadas: 0,
    precio: 0
  }

  peliculas = [
  { codigo: 1, titulo: 'Gt4 cup', horario: "20:00" , butacasTotales:32 ,butacasOcupadas:2 ,precio:10},
  { codigo: 2, titulo: 'Gran Turismo', horario: "22:30" , butacasTotales:35 ,butacasOcupadas:22 ,precio:8},
  { codigo: 3, titulo: 'Le Mans', horario: "14:40" , butacasTotales:54 ,butacasOcupadas:54 ,precio:7},
  { codigo: 4, titulo: 'Gt3 cup', horario: "16:00" , butacasTotales:35 ,butacasOcupadas:33 ,precio:9},
  { codigo: 5, titulo: 'F1', horario: "18:00" , butacasTotales:75 ,butacasOcupadas:12 ,precio:11},
  ];

  hayRegistros() {
    return this.peliculas.length > 0;
  }

  reservar(codigo: number) {
    for (let x = 0; x < this.peliculas.length; x++)
      if (this.peliculas[x].codigo == codigo) {
        this.peliculas[x].codigo--
        return;
      }
  }

  seleccionar(peli: { codigo: number; titulo: string; horario: string; }) {
    this.peli.codigo = peli.codigo;
    this.peli.titulo = peli.titulo;
    this.peli.horario = peli.horario;
  }
}
