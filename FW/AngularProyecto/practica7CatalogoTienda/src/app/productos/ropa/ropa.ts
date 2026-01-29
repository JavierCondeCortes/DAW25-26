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
  selector: 'app-ropa',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './ropa.html',
  styleUrl: './ropa.css',
})
export class Ropa {
  productos: Producto[] = [
    {
      ID: 5,
      Nombre: 'bufanda',
      Categoria: 'ropa',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    },
    {
      ID: 6,
      Nombre: 'playeros',
      Categoria: 'ropa',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    }
  ];
}
