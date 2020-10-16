import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameFormErrorResolver } from '../../components/name-form/name-form.component';


@Component({
  selector: 'app-new-contact-page',
  templateUrl: './new-contact-page.component.html',
  styleUrls: ['./new-contact-page.component.scss'],
})
export class NewContactPageComponent implements OnInit {

  @ViewChild('lastNameRenderer') lastNameRenderer: TemplateRef<any>;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormGroup({
        lastname: new FormControl(
          'Initial Last name',
          [
            Validators.minLength(5),
          ],
        ),
        prename: new FormControl('Initial pre name'),
      }),
      address: new FormGroup({
        street: new FormControl('Initial street'),
        city: new FormControl('Initial city'),
      }),
    });
  }

  get nameForm(): FormGroup {
    return this.form.get('name') as FormGroup;
  }

  get addressForm(): FormGroup {
    return this.form.get('address') as FormGroup;
  }

  nameFormErrorResolver(): NameFormErrorResolver {
    const { lastNameRenderer } = this;

    return {
      resolve(field: 'lastname' | 'prename', control: FormControl): string | null | TemplateRef<any> {
        if (control.hasError('minlength')) {
          return lastNameRenderer;
        }
      },
    };
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
  }

}
