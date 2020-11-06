import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  displayedColumns: String[] = ['name', 'location', 'action'];

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.read().subscribe(books => {
      this.books = books;
    });
  }

  deleteBook(id :string): void {
    this.bookService.delete(id).subscribe(() => {
      this.router.navigate(['/book']);
    });
  }

}
