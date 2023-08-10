import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  // ngFor

  postArray: Array<string> = ['Post 1', 'Post 3', 'Post 3', 'Post 4', 'Post 5'];


  posts: Array<any> = [
    { id: 1, postname: 'Post 1' },
    { id: 2, postname: 'Post 2' },
    { id: 3, postname: 'Post 3' },
    { id: 4, postname: 'Post 4' },
    { id: 5, postname: 'Post 5' },
  ];

  students: Array<any> = [
    { id: 1, name: "Rehan", age: 27 },
    { id: 2, name: "Ali", age: 31 },
    { id: 3, name: "Sineha", age: 29 },
    { id: 4, name: "Priya", age: 23 },
    { id: 5, name: "Sohail", age: 25 }
  ];


  addNew() {
    this.students.push({ id: 6, name: "Chander", age: 23 });
  }

  onDelete(student: any) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }


  // ngIf
  seasons: Array<string> = [];

  addNewSeason() {
    this.seasons.push('season');
  }


  // ng Template
  groups: Array<string> = [];

  addNewGroup() {
    this.groups.push('group');
  }

  // ngSwitch
  stepForm: any;

  stepFormBtn(step: any) {
    this.stepForm = step;
  }

}
