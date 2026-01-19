import { Routes } from '@angular/router';
import {Inicio} from './inicio/inicio';
import {Productos} from './productos/productos';
import {Contacto} from './contacto/contacto';
import {AcercaDe} from './acerca-de/acerca-de';
import {Pagina404} from './pagina404/pagina404';
import {ProductoDetalle} from './producto-detalle/producto-detalle';

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
    },
    // {
    //     path 'productos/electronica',
    //     component: ProductosElectronica
    // },{
    //     path 'productos/ropa',
    //     component: ProductosRopa
    // },{
    //     path 'productos/alimentos',
    //     component: ProductosAlimentos
    // },
    {
        path: '**',
        redirectTo: 'pagina404'
    }
];
