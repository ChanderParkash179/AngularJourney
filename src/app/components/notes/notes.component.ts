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

}
