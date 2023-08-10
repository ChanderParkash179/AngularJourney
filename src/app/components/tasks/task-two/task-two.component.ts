import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})

export class TaskTwoComponent implements OnInit {

  // placeholders
  name: string = "Name";
  email: string = "E-Mail";
  address: string = "Address";

  // values
  nameValues: any;
  emailValues: any;
  addressValues: any;

  studentList: Array<any> = [];

  onSave(n: any, e: any, a: any) {
    this.studentList.push({ name: n, email: e, address: a });
  }

  onDelete(student: any) {
    let index = this.studentList.indexOf(student);
    this.studentList.splice(index, 1);
  }

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
