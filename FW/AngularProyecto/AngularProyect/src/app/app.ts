import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre = 'Juan Francisco';
  apellidos = "Conde Augusto";
  sueldos=[2300,3440,1800];
  activo = true;
  sitio='https://google.com';

  edad = 40;

  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  }, {
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  generarNumero() {
    return Math.floor(Math.random() * 3) + 1;
  }

    contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

nombre2 = ''

  fijarNombre1() {
    this.nombre2 = 'Juan';
  }

  fijarNombre2() {
    this.nombre2 = 'Ana';
  }

}

