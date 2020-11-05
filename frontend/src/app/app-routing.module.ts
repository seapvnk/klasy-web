import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksCrudComponent } from './views/books-crud/books-crud.component';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "list",
  component: BooksCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
