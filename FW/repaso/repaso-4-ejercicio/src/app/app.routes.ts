import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    {
        path:"lista",
        component:Lista
    },
    {
        path:"formulario",
        component:Formulario
    }
];
