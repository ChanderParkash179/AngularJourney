import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/sections/routing-navigation/post-list/post-list.component';
import { HomeComponent } from './components/sections/routing-navigation/home/home.component';
import { PostComponent } from './components/sections/routing-navigation/post/post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id/:title', component: PostComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
