import { Routes } from '@angular/router';
import { Apartado1 } from './apartado1/apartado1';
import { Subapartado1 } from './apartado1/subapartado1/subapartado1';
import { Subapartado2 } from './apartado1/subapartado2/subapartado2';
import { Apartado2 } from './apartado2/apartado2';
import { Subapartado3 } from './apartado2/subapartado3/subapartado3';
import { Subapartado4 } from './apartado2/subapartado4/subapartado4';
import { Principal } from './principal/principal';

export const routes: Routes = [
    {
        path:'',
        component:Principal
    },
    {
        path: 'apartado1',
        component: Apartado1,
        children: [
            {
                path: 'subapartado1',
                component: Subapartado1
            },
            {
                path: 'subapartado2',
                component: Subapartado2
            }
        ]
    },
    {
        path: 'apartado2',
        component: Apartado2,
        children: [
            {
                path: 'subapartado3',
                component: Subapartado3
            },
            {
                path: 'subapartado4',
                component: Subapartado4
            }
        ]
    }
];
