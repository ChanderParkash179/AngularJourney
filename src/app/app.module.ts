import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { TaskOneComponent } from './components/tasks/task-one/task-one.component';
import { DirectivesComponent } from './components/sections/directives/directives.component';
import { TaskTwoComponent } from './components/tasks/task-two/task-two.component';
import { PipesComponent } from './pipes/pipe/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { CustomPipeWithArgumentsPipe } from './pipes/custom-pipe-with-arguments.pipe';
import { PostServiceComponent } from './components/sections/ps-component/ps-component.component';
import { PostService } from './services/post.service';
import { TemplateDrivenFormsComponent } from './components/sections/template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TaskOneComponent,
    DirectivesComponent,
    TaskTwoComponent,
    PipesComponent,
    CustomPipePipe,
    CustomPipeWithArgumentsPipe,
    PostServiceComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
