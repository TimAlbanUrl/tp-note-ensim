import { Component, inject, computed, signal } from "@angular/core";
import { Manager } from '../manager';

@Component({
  imports: [],
  selector: "app-battle-component",
  styleUrl: "./battle-component.css",
  templateUrl: "./battle-component.html",
})
export class BattleComponent {
  private readonly manager = inject(Manager);
  private readonly selection = signal<string[]>([]);
  private readonly isReady = computed(() => this.selection().length === 2);
  private readonly list = computed(() => {
    return this.manager.getList().filter(kistune => !kistune.isResting);
  });

  private readonly isSelected = (name: string) => {
    return this.selection().filter(selectedItem => selectedItem == name).length === 1
  }

  private handleCardClick = (name: string) => {
    if(this.isSelected(name))
      this.selection.update((currentState) => currentState.filter(selectedItem => selectedItem != name));
    else if(this.selection().length < 2)
      this.selection.update((currentState) => [...currentState, name]);
    console.log(this.selection)
  }
}
