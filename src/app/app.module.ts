import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { TaskOneComponent } from './components/tasks/task-one/task-one.component';
import { DirectivesComponent } from './components/sections/directives/directives.component';
import { TaskTwoComponent } from './components/tasks/task-two/task-two.component';
import { PipesComponent } from './components/sections/pipes/pipe/pipes.component';
import { CustomPipePipe } from './components/sections/pipes/custom-pipe.pipe';
import { CustomPipeWithArgumentsPipe } from './components/sections/pipes/custom-pipe-with-arguments.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TaskOneComponent,
    DirectivesComponent,
    TaskTwoComponent,
    PipesComponent,
    CustomPipePipe,
    CustomPipeWithArgumentsPipe
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
