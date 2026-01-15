import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AmericaComponent } from './america/america';
import { ChileComponent } from './america/chile/chile';
import { ArgentinaComponent } from './america/argentina/argentina';
import { UruguayComponent } from './america/uruguay/uruguay';
import { EuropaComponent } from './europa/europa';
import { EspanaComponent } from './europa/espana/espana';
import { FranciaComponent } from './europa/francia/francia';
import { ItaliaComponent } from './europa/italia/italia';


export const routes: Routes = [
    {
        path: 'america',
        component: AmericaComponent,
        children: [
            {
                path: 'chile',
                component: ChileComponent
            },
            {
                path: 'argentina',
                component: ArgentinaComponent
            },
            {
                path: 'uruguay',
                component: UruguayComponent
            }
        ]
    },
    {
        path: 'europa',
        component: EuropaComponent,
        children: [
            {
                path: 'espana',
                component: EspanaComponent
            },
            {
                path: 'francia',
                component: FranciaComponent
            },
            {
                path: 'italia',
                component: ItaliaComponent
            }
        ]
    }
];