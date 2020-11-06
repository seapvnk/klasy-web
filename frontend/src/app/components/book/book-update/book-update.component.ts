import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from '../book.model';
import BookService from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: Book = {
    id: "",
    name: "",
    reward: "",
  } 

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.readById(id).subscribe(book => {
      this.book = book;
    });
  }

  updateBook(): void {
    this.bookService.update(this.book).subscribe(() => {
      this.router.navigate(['/book']);
    });
  }

  cancel(): void {
    this.router.navigate(['/book']);
  }

}
