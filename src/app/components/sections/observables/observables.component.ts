import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const _observe = new Observable(observe => {
      console.log('printed from Observable');
    }).subscribe();

    const _observeNext = new Observable(observe => {
      observe.next("I am Obervable's next feature!")
    }).subscribe(value => {
      console.log(value);
    });
  }

}
