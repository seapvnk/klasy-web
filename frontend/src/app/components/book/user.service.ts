import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  baseUrl = 'http://localhost:3030/user/1';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, user);
  }
}
