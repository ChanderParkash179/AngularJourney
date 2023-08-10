import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notesTitle: string = "NOTES";

  section1: string = "SEC 01: Introduction to Display Data & Event Handling";
  section2: string = "SEC 02: Introduction to Directives";
  section3: string = "SEC 03: Introduction to Pipes";

  stringInterpolationTitle: string = "String Interpolation";
  stringInterpolationDef: string = "String Interpolation is used to show dynamic data on HTML Page or inside the view (HTML Page)";

  propertyBindingTitle: string = "Property Binding";
  propertyBindingDef: string = "";
  propertyBindingImgUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1KAnF7oK_63ml1c_JAc-PQJhnwJfCugw6Q&usqp=CAU';
  propertyBindingImgName: string = 'property binding in angular image';

  classBindingTitle: string = "Class Binding";
  classBindingDef: string = "";
  enableVar: boolean = false;

  styleBindingTitle: string = "Style Binding";
  styleBindingUrl: string = "https://www.w3schools.com/jsref/dom_obj_style.asp";
  colorVar: boolean = true;

  eventBindingTitle: string = "Event Binding";
  btnTitle = "Click Me to check below response";
  clicked: boolean = true;
  btnClick() {
    return this.clicked = !this.clicked;
  }

  eventFilteringTitle: string = "Event Filtering";
  eventKeyFilterBtnTitle = "Click Me to Check Event Filtering Magic!";
  eventKeyFilterMsg = "Thank You for Pressing Enter! I'm Key Up Filter";
  eventKeyFilterCheck: boolean = false;
  onKeyUp() {
    return this.eventKeyFilterCheck = !this.eventKeyFilterCheck;
  }

  templateVariableTitle = "Template Variable";
  tvMsg: string = "";
  tvCheck: boolean = false;
  onTemplateVariable(msg: any) {
    this.tvMsg = msg;
  }

  twoWayDataBindingTitle: string = "Two Way Data Binding";
  userName: any;
  ontwDBCheck: boolean = false;
  ontwDB() {
    this.ontwDBCheck = true;
  }

  // Two way data binding v/s one way data binding

  // ONE - WAY DATA BINDING EXAMPLE PAIRS
  stringInterpolationExamplePairs = '{{ title }}';
  propertyBindingExamplePairs = '[src]';
  classBindingExamplePairs = '[class.text-red]';
  styleBindingExamplePairs = '[style.backgroundColor]';

  // TWO - WAY DATA BINDING EXAMPLE PAIRS
  ngModelExamplePair = '[(ngModel)]'
}
