import { Routes } from '@angular/router';
import {Inicio} from './inicio/inicio';
import {Productos} from './productos/productos';
import {Contacto} from './contacto/contacto';
import {AcercaDe} from './acerca-de/acerca-de';
import {Pagina404} from './pagina404/pagina404';
import {ProductoDetalle} from './producto-detalle/producto-detalle';
import {Ropa}from './productos/ropa/ropa';
import {Electronica}from './productos/electronica/electronica';
import {Alimentos}from './productos/alimentos/alimentos';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    }, {
        path: 'inicio',
        component: Inicio
    }, {
        path: 'contacto',
        component: Contacto
    }, {
        path: 'acercade',
        component: AcercaDe
    }, {
        path: 'pagina404',
        component: Pagina404
    }, {
        path: 'productos',
        component: Productos,
        children: [
            {
                path: 'alimentos',
                component: Alimentos
            },
            {
                path: 'electronica',
                component: Electronica
            },
            {
                path: 'ropa',
                component: Ropa
            },
            {
                path: ':id',
                component: ProductoDetalle
            }
        ]
    },{
        path: '**',
        redirectTo: 'pagina404'
    }
];
