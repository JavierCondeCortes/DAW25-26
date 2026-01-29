import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Producto {
  ID: number; 
  Nombre: string; 
  Categoria: string; 
  precio: string; 
  descripcion: string; 
  UrlImagen: string;
}

@Component({
  selector: 'app-electronica',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './electronica.html',
  styleUrl: './electronica.css',
})
export class Electronica {
  productos: Producto[] = [
    {
      ID: 1,
      Nombre: 'televisor',
      Categoria: 'electronica',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    },
    {
      ID: 2,
      Nombre: 'ordenador',
      Categoria: 'electronica',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    }
  ];
}
