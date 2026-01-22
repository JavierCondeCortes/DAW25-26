import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface Producto {
  ID: number; 
  Nombre: string; 
  Categoria: string; 
  precio: string; 
  descripcion: string; 
  UrlImagen: string; }

@Component({
  selector: 'app-productos',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  lista = [
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
    },
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
    },
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
  ]
}
