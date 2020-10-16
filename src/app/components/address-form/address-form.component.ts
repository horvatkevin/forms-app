import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {

  @Input() formGroup: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
