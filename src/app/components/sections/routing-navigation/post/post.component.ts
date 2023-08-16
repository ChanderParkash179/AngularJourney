import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  id: any;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(value => {
      this.id = value.get('id');
    });
  }

}
