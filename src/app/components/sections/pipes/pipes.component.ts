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

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
