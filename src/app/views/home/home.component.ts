import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      temperature: [18, [Validators.min(18), Validators.max(22) ]],
    });

    this.options.valueChanges.subscribe((value) => {
      console.log('value changes', value);
    })
  }
}
