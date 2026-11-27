import { Routes } from '@angular/router';
import { ListComponent } from './kitsune/list-component/list-component';
import { DetailComponent } from './kitsune/detail-component/detail-component';
import { KitsuneResolver } from './kitsune/resolver';
import { AddComponent } from './kitsune/add-component/add-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/kitsune',
        pathMatch: 'full'
    },
    {
        path: 'kitsune/:name',
        component: DetailComponent,
        resolve: {
            kitsune: KitsuneResolver
        }
    },
    {
        path: 'kitsune',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];
