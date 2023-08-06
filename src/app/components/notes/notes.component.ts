import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notesTitle: string = "NOTES";

  section1: string = "Intro Display Data & Event Handling";

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
}
