import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent implements OnInit {


  // PIPES

  upperCaseValue: string = "hello i'll be transformed into uppercase letters";
  lowerCaseValue: string = "HELLO I'LL BE TRANSFORMED INTO LOWERCASE LETTERS";
  numberValue: number = 264798513;
  decimalValue: number = 36.2159;
  currencyValue: number = 121.92;
  dateValue: Date = new Date();
  jsonValue: any = {
    id: 1,
    name: 'Ali',
    age: 23
  }
  percentValue: number = 0.34;
  sliceValue: Array<any> = ['post1', 'post2', 'post3', 'post4', 'post5'];

  customValue: any = {
    id: 1, name: 'Chander', city: 'Karachi'
  }

  customValueWithArguments: string = "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th' industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'";

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
