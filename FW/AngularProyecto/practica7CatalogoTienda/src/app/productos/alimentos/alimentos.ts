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
  selector: 'app-alimentos',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css',
})
export class Alimentos {
  productos: Producto[] = [
    {
      ID: 3,
      Nombre: 'manzana',
      Categoria: 'alimentos',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    },
    {
      ID: 4,
      Nombre: 'pera',
      Categoria: 'alimentos',
      precio: '10 yuanes',
      descripcion: 'es un objeto mas de la lista',
      UrlImagen: '',
    }
  ];
}
