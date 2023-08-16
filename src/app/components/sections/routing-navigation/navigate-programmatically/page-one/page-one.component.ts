import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toPageTwo() {
    this.router.navigate(['/pageTwo']);
  }
}
