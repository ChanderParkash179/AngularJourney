import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
})
export class IfElseComponent {
  agePlaceholder: string = 'Please Enter Your Age';
  age = signal(0);

  getAge(age: any) {
    this.age.set(age);
  }
}
