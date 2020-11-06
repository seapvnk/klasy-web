import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import Book from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:3030/books';

  constructor(private snackBar: MatSnackBar,
              private zone: NgZone,
              private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book);
  }
}
