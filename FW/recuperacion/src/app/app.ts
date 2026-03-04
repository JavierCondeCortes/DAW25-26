import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './tarea/tarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TareaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  // Punto 2: Lista con 5 tareas iniciales (nombre y estado)
  tareas = [
    { nombre: 'Estudiar Angular', estado: 'pendiente' },
    { nombre: 'Hacer la compra', estado: 'completada' },
    { nombre: 'Lavar los platos', estado: 'pendiente' },
    { nombre: 'Sacar al perro', estado: 'pendiente' },
    { nombre: 'Leer un libro', estado: 'completada' }
  ];

  // Propiedad para el formulario (Punto 3)
  nuevaTareaNombre = '';

  // Punto 3: Función para agregar tarea
  agregarTarea() {
    if (this.nuevaTareaNombre != '') {
      this.tareas.push({
        nombre: this.nuevaTareaNombre,
        estado: 'pendiente'
      });
      this.nuevaTareaNombre = ''; // Limpiar input
    }
  }

  // Punto 4: Función que recibe el aviso del hijo y actualiza
  actualizarLista(indice: number) {
    if (this.tareas[indice].estado == 'pendiente') {
      this.tareas[indice].estado = 'completada';
    } else {
      this.tareas[indice].estado = 'pendiente';
    }
  }
}