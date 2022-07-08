import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(): Observable<USER> {
    return this.http
      .get<USER>(this.apiURL + '/users')
  }
  GetUser(id: any): Observable<USER> {
    return this.http
      .get<USER>(this.apiURL + '/users/' + id)
  }
  postuser(user: any) {
    return this.http
      .post<USER>(this.apiURL + '/users', JSON.stringify(user), this.httpOptions)
  }
  putuser(user: any, id: any) {
    return this.http
      .put<USER>(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
  }
  deleteuser(id: any) {
    return this.http
      .delete<USER>(this.apiURL + '/users/' + id, this.httpOptions)
  }

  LimitResults(limit: any): Observable<USER> {
    return this.http
      .get<USER>(this.apiURL + '/users/' + limit)
  }
  SortResults(sort: any): Observable<USER> {
    return this.http
      .get<USER>(this.apiURL + '/users/' + sort)
  }
}
