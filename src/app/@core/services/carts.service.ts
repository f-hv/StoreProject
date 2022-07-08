import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CART } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  apiURL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getcarts(): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts')
  }

  Getcart(id: any): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts/' + id)
  }

  GetUserCarts(id: any): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts/user/' + id)
  }

  GetCartsDateRange(startDate: Date, endDate: Date): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts/' + startDate + endDate)
  }

  postCart(cart: any) {
    return this.http
      .post<CART>(this.apiURL + '/carts', JSON.stringify(cart), this.httpOptions)
  }

  putCart(cart: any, id: any) {
    return this.http
      .put<CART>(this.apiURL + '/carts/' + id, JSON.stringify(cart), this.httpOptions)
  }
  
  deleteCart(id: any) {
    return this.http
      .delete<CART>(this.apiURL + '/carts/' + id, this.httpOptions)
  }

  LimitResults(limit: any): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts/' + limit)
  }

  // The default value is in ascending mode, you can use it with 'desc' or 'asc' as you want.
  SortResults(sort: any): Observable<CART> {
    return this.http
      .get<CART>(this.apiURL + '/carts/' + sort)
  }

}
