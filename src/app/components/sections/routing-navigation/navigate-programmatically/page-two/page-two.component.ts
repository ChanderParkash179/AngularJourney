import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
})
export class PageTwoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  toPageOne() {
    this.router.navigate(['/pageOne']);
  }
}
