import { Component, inject } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Manager } from '../manager';

@Component({
  imports: [ReactiveFormsModule],
  selector: "app-add-component",
  styleUrl: "./add-component.css",
  templateUrl: "./add-component.html",
})
export class AddComponent {
  private readonly manager = inject(Manager);
  private readonly form = new FormGroup({
    name: new FormControl('', [Validators.required, (control: AbstractControl) => {
      return this.manager.isNameAvailable(control.value)
        ? null
        : { name: true };
      },
    ]),
    description: new FormControl('', [Validators.required]),
    hp: new FormControl('', [Validators.required]),
    strength: new FormControl('', [Validators.required]),
    speed: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.manager.addKitsune(
      this.form.value['name'],
      this.form.value['description'],
      parseInt(this.form.value['hp'] + ''),
      parseInt(this.form.value['strength'] + ''),
      parseInt(this.form.value['speed'] + '')
    );
  }
}
