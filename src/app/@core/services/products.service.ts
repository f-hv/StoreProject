import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCT } from '../models/product.model';
import { map } from 'rxjs/operators';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiURL = 'https://fakestoreapi.com';

  constructor(private http: RestClientService) {}
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getProducts(): Observable<PRODUCT> {
    return this.http.get('/products');
  }
  getProduct(id: any): Observable<PRODUCT> {
    return this.http.get(`/products/${id}`);
  }
  getProductsSpecificCategory(titleCategory: string): Observable<PRODUCT> {
    return this.http.get(`/products/category/${titleCategory}`);
  }
  getallcategories(): Observable<any> {
    return this.http.get('/products/categories');
  }
  postProduct(body: any) {
    return this.http.post('/products', body);
  }
  putProduct(body: any, id: any) {
    return this.http.put(`/products/${id}`, body);
  }
  deleteProduct(id: any) {
    return this.http.delete(`/products/${id}`);
  }

  LimitResults(limit: any): Observable<PRODUCT> {
    return this.http.get(`/products/${limit}`);
  }
  SortResults(sort: any): Observable<PRODUCT> {
    return this.http.get(`/products/${sort}`);
  }
}
