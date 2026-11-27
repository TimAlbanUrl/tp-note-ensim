import { Component, inject, computed } from "@angular/core";
import { RouterLink } from '@angular/router';
import { Manager } from '../manager';

@Component({
  imports: [RouterLink],
  selector: "app-list-component",
  styleUrl: "./list-component.css",
  templateUrl: "./list-component.html",
})
export class ListComponent {
  private readonly manager = inject(Manager);

  private readonly list = computed(() => {
    return this.manager.getList();
  });
}
