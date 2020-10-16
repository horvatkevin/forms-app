import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface NameFormErrorResolver {
  resolve(field: 'lastname' | 'prename', control: FormControl): string | null | TemplateRef<any>;
}

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent implements OnInit {

  @Input() formGroup: FormGroup = new FormGroup({
    lastname: new FormControl(),
    prename: new FormControl(),
  });

  @Input() errorResolver: NameFormErrorResolver;

  get lastname(): FormControl {
    return this.formGroup.get('lastname') as FormControl;
  }

  get prename(): FormControl {
    return this.formGroup.get('prename') as FormControl;
  }

  resolveError(fieldName: 'lastname' | 'prename', control: FormControl): string | null | TemplateRef<any> {
    if (this.errorResolver === null) {
      return null;
    }
    return this.errorResolver.resolve(fieldName, control);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
