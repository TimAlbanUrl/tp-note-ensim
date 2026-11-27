import { Component, inject, signal, computed } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../manager';
import { KitsuneInterface } from '../kitsune-interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: "app-detail-component",
  styleUrl: "./detail-component.css",
  templateUrl: "./detail-component.html",
})
export class DetailComponent {
  private readonly manager = inject(Manager);
  private readonly route = inject(ActivatedRoute);
  private readonly data = toSignal(this.route.data, {requireSync: true});
  kitsune = computed(() => this.data()['kitsune'] as KitsuneInterface);

  private readonly handleBoostAttempt = () => {
    this.manager.tryToBoost(this.kitsune().name);
    console.log(this.kitsune().boost);
  }
}
