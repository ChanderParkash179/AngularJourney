import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/sections/routing-navigation/post-list/post-list.component';
import { HomeComponent } from './components/sections/routing-navigation/home/home.component';
import { PostComponent } from './components/sections/routing-navigation/post/post.component';
import { PageOneComponent } from './components/sections/routing-navigation/wild-card-routers/page-one/page-one.component';
import { PageTwoComponent } from './components/sections/routing-navigation/wild-card-routers/page-two/page-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id/:title', component: PostComponent },
  { path: 'pageOne', component: PageOneComponent },
  { path: 'pageTwo', component: PageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
