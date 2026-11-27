import { inject } from '@angular/core';
import { Manager } from './manager';
import type {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import { KitsuneInterface } from './kitsune-interface';

export const KitsuneResolver: ResolveFn<KitsuneInterface | null> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    const manager = inject(Manager);
    const name = route.paramMap.get('name');
    return manager.getKitsune(name);
}