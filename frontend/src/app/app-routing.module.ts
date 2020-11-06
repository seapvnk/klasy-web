import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BooksCrudComponent } from './views/books-crud/books-crud.component';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "book",
  component: BooksCrudComponent
}, {
  path: "book/add",
  component: BookAddComponent
}, {
  path: "book/update/:id",
  component: BookUpdateComponent
}, {
  path: "book/delete/:id",
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
