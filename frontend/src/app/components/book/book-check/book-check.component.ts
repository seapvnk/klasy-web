import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from '../book.model';
import BookService from '../book.service';
import User from '../user.model';
import UserService from '../user.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-check.component.html',
  styleUrls: ['./book-check.component.css']
})
export class BookCheckComponent implements OnInit {
  book: Book;
  user: User;

  constructor(private bookService: BookService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser().subscribe(user => {
      this.user = user;
    })

    this.bookService.readById(id).subscribe(book => {
      this.book = book;
    });

  }
  
  check(): void {
    this.bookService.delete(this.book.id).subscribe(() => {
      const score = `${parseInt(this.user.score) + parseInt(this.book.reward)}`;
      const books = `${parseInt(this.user.books) + 1}`;

      this.userService.updateUser({
        ...this.user,
        score,
        books,
      }).subscribe(() => {
        this.router.navigate(['/book']);
      });
    });
  }

  cancel() :void {
    this.router.navigate(['/book']);
  }
}
