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

  pelis = {
    id: 0,
    titulo: "",
    horario: "",
    butacasTotales: 0,
    butacasOcupadas: 0,
    precio: 0
  };

  peliculas = [
    { id: 0, titulo: "24h LeMans", horario: "15:00", butacasTotales: 43, butacasOcupadas: 20, precio: 6, },
    { id: 1, titulo: "F1", horario: "20:00", butacasTotales: 40, butacasOcupadas: 15, precio: 5, },
    { id: 2, titulo: "GranTurismo", horario: "16:00", butacasTotales: 37, butacasOcupadas: 30, precio: 7, },
    { id: 3, titulo: "GT3World", horario: "18:00", butacasTotales: 59, butacasOcupadas: 50, precio: 9, }
  ];

  reser = {
    nombre: "",
    idPeli: 0,
    butacasReservadas: 0,
    precioTotal: 0
  };

  //insertar valores al interactuar con el formulario de reserva principal
  reservas: { idPeli: number; nombre: string; butacasReservadas: number; precioTotal: number }[] = [];


  reserva() {

    //error
    // if (this.reser.nombre == "") {
    //   if (this.reser.butacasReservadas <= 0) {
    //     alert("debes de introducir un valor mayor que 0");
    //     if (this.reser.butacasReservadas > (this.pelis.butacasTotales - this.pelis.butacasOcupadas)) {
    //       alert("error , no hay suficientes butacas disponibles");
    //     } else {
    //       //agrega valores al array de objetos reservas 
    //       this.reservas.push({
    //         idPeli: this.reser.idPeli, nombre: this.reser.nombre, butacasReservadas: this.reser.butacasReservadas
    //       });
    //     }
    //   }
    // }

    // Validar nombre
    if (this.reser.nombre.trim() === "") {
      alert("Debes introducir un nombre");
      return;
    }

    // Validar número de butacas
    if (this.reser.butacasReservadas <= 0) {
      alert("Debes introducir un valor mayor que 0");
      return;
    }

    // Buscar la película seleccionada
    const peli = this.peliculas.find(p => p.id === this.reser.idPeli);
    if (!peli) {
      alert("Debes seleccionar una película válida");
      return;
    }

    // Validar disponibilidad
    const disponibles = peli.butacasTotales - peli.butacasOcupadas;
    if (this.reser.butacasReservadas > disponibles) {
      if (disponibles === 0) {
        alert("No quedan butacas para esta película");
      } else {
        alert(`Solo quedan ${disponibles} butacas para esta película`);
      }
      return;
    }

    const precioTotal = this.reser.butacasReservadas * peli.precio;
    this.reservas.push({
      idPeli: this.reser.idPeli,
      nombre: this.reser.nombre,
      butacasReservadas: this.reser.butacasReservadas,
      precioTotal
    });


    //agrega asientos ocupados a la pelicula seleccionada
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === this.reser.idPeli) {
        this.peliculas[i].butacasOcupadas += this.reser.butacasReservadas;
      }
    }

    // reiniciamos los valores a su estado original
    this.reser.nombre = "";
    this.reser.idPeli = 0;
    this.reser.butacasReservadas = 0;
  }

  formulario(reser: { id: number; nombre: string; butacasReservadas: number }) {
    this.reser.idPeli = reser.id;
    this.reser.nombre = reser.nombre;
    this.reser.butacasReservadas = reser.butacasReservadas;
  }



}