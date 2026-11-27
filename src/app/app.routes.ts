import { Routes } from '@angular/router';
import { ListComponent } from './kitsune/list-component/list-component';
import { DetailComponent } from './kitsune/detail-component/detail-component';
import { KitsuneResolver } from './kitsune/resolver';

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
];
