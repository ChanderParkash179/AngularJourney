import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../../../validators/no-space.validators';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {

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
