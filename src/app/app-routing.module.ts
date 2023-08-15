import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/sections/routing-navigation/post-list/post-list.component';
import { HomePageComponent } from './components/sections/routing-navigation/home-page/home-page.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
