import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCT } from '../models/product.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getProducts(): Observable<PRODUCT> {
    return this.http
      .get<PRODUCT>(this.apiURL + '/products')
  }
  getProduct(id: any): Observable<PRODUCT> {
    return this.http
      .get<PRODUCT>(this.apiURL + `/products/${id}`)
  }
  getProductsSpecificCategory(titleCategory: string): Observable<PRODUCT> {
    return this.http
      .get<PRODUCT>(this.apiURL + `/products/category/${titleCategory}`)
  }
  getallcategories(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + '/products/categories')
  }
  postProduct(body: any) {
    return this.http
      .post<PRODUCT>(this.apiURL + '/products', body)
  }
  putProduct(body: any, id: any) {
    return this.http
      .put<PRODUCT>(this.apiURL + `/products/${id}`, body)
  }
  deleteProduct(id: any) {
    return this.http
      .delete<PRODUCT>(this.apiURL + `/products/${id}`)
  }

  LimitResults(limit: any): Observable<PRODUCT> {
    return this.http
      .get<PRODUCT>(this.apiURL + `/products/${limit}`)
  }
  SortResults(sort: any): Observable<PRODUCT> {
    return this.http
      .get<PRODUCT>(this.apiURL + `/products/${sort}`)
  }
}
