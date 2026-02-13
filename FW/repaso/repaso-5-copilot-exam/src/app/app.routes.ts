import { Routes } from '@angular/router';
import { Crear } from './crear/crear';
import { Pelicula } from './pelicula/pelicula';

export const routes: Routes = [
    {
        path:"crear",
        component:Crear
    },
    {
        path:"pelicula\:id",
        component:Pelicula
    }
];
