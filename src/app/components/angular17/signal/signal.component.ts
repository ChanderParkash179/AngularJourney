import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html'
})

export class SignalComponent {

  firstName = signal("John");
  lastName = signal("Wick");

  fullName = computed(() => this.firstName() + ' ' + this.lastName());

  getFirstName(fname: any) {
    this.firstName.set(fname);
  }

  getLastName(lname: any) {
    this.lastName.set(lname);
  }
}