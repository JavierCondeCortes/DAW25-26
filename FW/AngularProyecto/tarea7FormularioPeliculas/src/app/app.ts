import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  peli = {
    codigo: 0,
    titulo: "",
    precio: 0,
    butacasTotales:0,
    butacasOcupadas:0,
  }

  peliculas = [
  { codigo: 1, titulo: 'F1',butacasTotales:54,butacasOcupadas:10, precio: 10.55 },
  { codigo: 2, titulo: 'Gt3 Race',butacasTotales:21,butacasOcupadas:20, precio: 12.10 },
  { codigo: 3, titulo: 'GranTurismo',butacasTotales:76,butacasOcupadas:35, precio: 52.30 },
  { codigo: 4, titulo: 'Gt4 Vuelta',butacasTotales:43,butacasOcupadas:21, precio: 17 },
  { codigo: 5, titulo: '24h LeMans',butacasTotales:85,butacasOcupadas:43, precio: 20 },
  ];

  reservaPeli={
    nombreCliente: "",
    peliculaSeleccionada:"",
    cantidadButacas:0,
    precioTotal:0
  }

  listaReserva = [];

  hayPeliculas() {
    return this.peliculas.length > 0;
  }


  reserva() {
    if (this.peli.butacasTotales - this.reservaPeli.cantidadButacas < 0) {
      alert('No se puede reservar, no hay suficientes asientos disponibles');
      return;
    }

    this.listaReserva.push({
      cliente: this.reservaPeli.nombreCliente,
      titulo: this.reservaPeli.peliculaSeleccionada,
      precio: this.reservaPeli.precioTotal,
      cantidadButacas: this.reservaPeli.cantidadButacas,
      butacasOcupadas: this.peli.butacasOcupadas
    });
    this.reservaPeli.nombreCliente = "";
    this.peli.titulo = "";
    this.peli.precio = 0;
    this.peli.butacasTotales = 0;
    this.peli.butacasOcupadas= 0;
  }

  seleccionar(peli: { codigo: number; titulo: string; precio: number; }) {
    this.peli.codigo = peli.codigo;
    this.peli.titulo = peli.titulo;
    this.peli.precio = peli.precio;
  }

  modificar() {
    for (let x = 0; x < this.peliculas.length; x++)
      if (this.peliculas[x].codigo == this.peli.codigo) {
        this.peliculas[x].titulo = this.peli.titulo;
        this.peliculas[x].precio = this.peli.precio;
        return;
      }
    alert('No existe el código de pelicula ingresado');
  }
}