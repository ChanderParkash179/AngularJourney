import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  formTitle = "Post Form";
  formDetails = "Post Details";
  formImgUrl = "Post Image URL";
  formPageUrl = "Post URL";
  formBgTitle = "Add Background";


  postTitle: any;
  postDetail: any;
  postImgSrc: any;
  postPageUrl: any;
  postCheck: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
