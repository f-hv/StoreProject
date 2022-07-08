import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = 'https://fakestoreapi.com';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  // fetch('https://fakestoreapi.com/auth/login',{
  UserLogin(username: any, password: any): Observable<any> {
    return this.http
      .post(this.apiURL + '/auth/login',this.httpOptions)
  }
}
