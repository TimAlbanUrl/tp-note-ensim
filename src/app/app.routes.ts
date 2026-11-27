import { Routes } from '@angular/router';
import { ListComponent } from './kitsune/list-component/list-component';
import { DetailComponent } from './kitsune/detail-component/detail-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/kitsune',
        pathMatch: 'full'
    },
    {
        path: 'kitsune/:name',
        component: DetailComponent
    },
    {
        path: 'kitsune',
        component: ListComponent
    },
];
