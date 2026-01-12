import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Mapa } from './mapa/mapa';
import { Contacto } from './contacto/contacto';
import { ACercaDe } from './a-cerca-de/a-cerca-de';
import { Pagina404 } from './pagina404/pagina404';

export const routes: Routes = [{
    path:'',
    component:Inicio
},{
    path:'Inicio',
    component:Inicio
},{
    path:'Mapa',
    component:Mapa
},{
    path:'Contacto',
    component:Contacto
},{
    path:'acercade',
    component:ACercaDe
},{
    path:'Pagina404',
    component:Pagina404
},{
    path:'**',
    redirectTo:'Pagina404'
}

];
