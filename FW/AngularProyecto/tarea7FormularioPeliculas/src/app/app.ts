import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  peliculas = signal([
    { codigo: 1, titulo: 'Avengers: Endgame', horario: '18:00', butacasTotales: 50, butacasOcupadas: 10, precio: 8 },
    { codigo: 2, titulo: 'Avatar 2', horario: '20:00', butacasTotales: 60, butacasOcupadas: 45, precio: 10 },
    { codigo: 3, titulo: 'Mario Bros', horario: '16:00', butacasTotales: 40, butacasOcupadas: 5, precio: 7 }
  ]);

  reservas = signal<
    { nombre: string; pelicula: string; cantidad: number; precioTotal: number }[]
  >([]);

  reservaForm = signal({
    nombre: '',
    peliculaId: 1,
    cantidad: 0
  });

  mensaje = signal('');

  getPeliculaSeleccionada() {
    return this.peliculas().find(p => p.codigo === this.reservaForm().peliculaId);
  }

  butacasDisponibles(): number {
    const peli = this.getPeliculaSeleccionada();
    return peli ? peli.butacasTotales - peli.butacasOcupadas : 0;
  }

  reservar(): void {
    const peli = this.getPeliculaSeleccionada();
    if (!peli) return;

    const disponibles = this.butacasDisponibles();
    const cantidad = this.reservaForm().cantidad;

    if (cantidad > disponibles) {
      this.mensaje(
        disponibles === 0
          ? 'No quedan butacas para esta película'
          : `Solo quedan ${disponibles} butacas para esta película`
      );
      return;
    }

    peli.butacasOcupadas += cantidad;
    const precioTotal = cantidad * peli.precio;

    this.reservas.mutate(r =>
      r.push({
        nombre: this.reservaForm().nombre,
        pelicula: peli.titulo,
        cantidad,
        precioTotal
      })
    );

    this.mensaje('');
    this.reservaForm.set({ nombre: '', peliculaId: 1, cantidad: 0 });
  }
}
