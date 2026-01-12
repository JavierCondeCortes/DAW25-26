import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Tablanro } from './tablanro/tablanro';

export const routes: Routes = [{
    path:"tabla/:nro/:terminos",
    component:Tablanro
}
];
