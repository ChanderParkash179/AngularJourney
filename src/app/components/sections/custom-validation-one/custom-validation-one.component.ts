import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../../../validators/no-space.validators';

@Component({
  selector: 'app-custom-validation-one',
  templateUrl: './custom-validation-one.component.html',
  styleUrls: ['./custom-validation-one.component.css']
})
export class CustomValidationOneComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  form: any = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(8), noSpace.noSpaceValidators]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void { }
}
