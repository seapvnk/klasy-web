import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book = {
    name: "",
    reward: "",
  }

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addBook(): void {
    this.bookService.create(this.book).subscribe(() => {
      this.bookService.showMessage("Book added");
      this.book.name = "";
      this.book.reward = "";
    });
  }

  cancel(): void {
    this.router.navigate(['/book']);
  }

}
