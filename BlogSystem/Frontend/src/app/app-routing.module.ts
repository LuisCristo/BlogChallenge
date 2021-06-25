import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { ShowBlogComponent } from './components/show-blog/show-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'showBlog', pathMatch: 'full' },
  { path: 'addBlog', component: AddBlogComponent },
  { path: 'showBlog', component: ShowBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
