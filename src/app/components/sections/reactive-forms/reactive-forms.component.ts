import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  emailPattern: any = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';

  form: any = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    address: new FormControl('', [Validators.required])
  });

  getControl(name: any): AbstractControl | null {
    return this.form.get(name)
  }


  constructor() { }

  ngOnInit(): void { }
}
