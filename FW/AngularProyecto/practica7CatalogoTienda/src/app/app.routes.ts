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
        path: 'productos',
        component: Productos
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
        path: 'productos/:id',
        component: ProductoDetalle
    },{
        path: 'productos/electronica',
        component: Electronica
    },{
        path: 'productos/ropa',
        component: Ropa
    },{
        path: 'productos/alimentos',
        component: Alimentos
    },{
        path: '**',
        redirectTo: 'pagina404'
    }
];
