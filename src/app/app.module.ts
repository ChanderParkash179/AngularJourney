import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ReactiveFormsComponent } from './components/sections/reactive-forms/reactive-forms.component';
import { CustomValidationComponent } from './components/sections/custom-validation/custom-validation.component';
import { PostListComponent } from './components/sections/routing-navigation/post-list/post-list.component';
import { HomeComponent } from './components/sections/routing-navigation/home/home.component';
import { PostComponent } from './components/sections/routing-navigation/post/post.component';
import { ObservablesComponent } from './components/sections/observables/observables.component';
import { PageOneComponent } from './components/sections/routing-navigation/navigate-programmatically/page-one/page-one.component';
import { PageTwoComponent } from './components/sections/routing-navigation/navigate-programmatically/page-two/page-two.component';
import { WildCardRouterComponent } from './components/sections/routing-navigation/wild-card-router/wild-card-router.component';
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
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    CustomValidationComponent,
    PostListComponent,
    HomeComponent,
    PostComponent,
    ObservablesComponent,
    PageOneComponent,
    PageTwoComponent,
    WildCardRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
