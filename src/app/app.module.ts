import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { TaskOneComponent } from './components/task-one/task-one.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { TaskTwoComponent } from './components/task-two/task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TaskOneComponent,
    DirectivesComponent,
    TaskTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
