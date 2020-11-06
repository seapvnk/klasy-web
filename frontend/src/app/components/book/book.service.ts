import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './book-add/book.model';
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

  read(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  readById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${book.id}`;
    return this.http.put<Book>(url, book);
  }

  delete(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
