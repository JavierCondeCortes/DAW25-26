import { Routes } from '@angular/router';
import { ListaPeliculas } from './lista-peliculas/lista-peliculas';
import { AgregarPeliculas } from './agregar-peliculas/agregar-peliculas';
import { App } from './app';


export const routes: Routes = [
    {
        path: 'peliculas',
        component: ListaPeliculas
    },
    {
        path: 'agregar',
        component: AgregarPeliculas
    },
    {
        path: '**',
        redirectTo: ''
    }
];
