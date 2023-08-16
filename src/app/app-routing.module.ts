import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/sections/routing-navigation/post-list/post-list.component';
import { HomeComponent } from './components/sections/routing-navigation/home/home.component';
import { PostComponent } from './components/sections/routing-navigation/post/post.component';
import { PageOneComponent } from './components/sections/routing-navigation/navigate-programmatically/page-one/page-one.component';
import { PageTwoComponent } from './components/sections/routing-navigation/navigate-programmatically/page-two/page-two.component';
import { WildCardRouterComponent } from './components/sections/routing-navigation/wild-card-router/wild-card-router.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id/:title', component: PostComponent },
  { path: 'pageOne', component: PageOneComponent },
  { path: 'pageTwo', component: PageTwoComponent },
  { path: '**', component: WildCardRouterComponent }, // it always be in the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
