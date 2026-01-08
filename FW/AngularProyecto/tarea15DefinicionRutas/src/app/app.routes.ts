import { Routes } from '@angular/router';
import { Contacto } from './components/contacto/contacto';
import { AcercaDe } from './components/acerca-de/acerca-de';

export const routes: Routes = [
    {
        path:'contacto',
        component: Contacto
    },
    {
        path: 'acercaDe',
        component:AcercaDe
    }
];
