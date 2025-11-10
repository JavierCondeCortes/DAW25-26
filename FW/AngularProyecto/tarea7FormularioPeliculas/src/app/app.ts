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
  reserva = {
    nombre: '',
    peliculaId: 0,
    cantidad: 1
  };

  reservas: {
    nombre: string;
    pelicula: string;
    cantidad: number;
    precioTotal: number;
  }[] = [];

  peliculas = [
    { id: 1, titulo: 'Avengers: Endgame', horario: '18:00', butacasTotales: 50, butacasOcupadas: 10, precio: 8 },
    { id: 2, titulo: 'Avatar 2', horario: '20:00', butacasTotales: 60, butacasOcupadas: 45, precio: 10 },
    { id: 3, titulo: 'Mario Bros', horario: '16:00', butacasTotales: 40, butacasOcupadas: 5, precio: 7 }
  ];

  hayPeliculas() {
    return this.peliculas.length > 0;
  }

  getButacasDisponibles(id: number): number {
    const peli = this.peliculas.find(p => p.id === id);
    return peli ? peli.butacasTotales - peli.butacasOcupadas : 0;
  }

  reservar() {
    const peli = this.peliculas.find(p => p.id === this.reserva.peliculaId);
    const cantidad = this.reserva.cantidad;

    if (!peli) {
      alert('Seleccione una película válida');
      return;
    }

    const disponibles = this.getButacasDisponibles(peli.id);

    if (disponibles === 0) {
      alert('No quedan butacas para esta película');
      return;
    }

    if (cantidad > disponibles) {
      alert(`Solo quedan ${disponibles} butacas para esta película`);
      return;
    }

    peli.butacasOcupadas += cantidad;

    this.reservas.push({
      nombre: this.reserva.nombre,
      pelicula: peli.titulo,
      cantidad,
      precioTotal: cantidad * peli.precio
    });
    
    // Opcional: ver las reservas en la consola del navegador
    console.log('Nueva reserva:', this.reservas[this.reservas.length - 1]);

    this.reserva = { nombre: '', peliculaId: 0, cantidad: 1 };
  }
}
