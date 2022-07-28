
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiURL = 'https://fakestoreapi.com';

  constructor(private restClientService:RestClientService) {}
  // // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  getProducts(): Observable<ProductModel[]> {
    return this.restClientService.get('/products');
  }
  getProduct(id: any): Observable<ProductModel> {
    return this.restClientService.get(`/products/${id}`);
  }
  getProductsSpecificCategory(titleCategory: string): Observable<ProductModel> {
    return this.restClientService.get(`/products/category/${titleCategory}`);
  }
  getallcategories(): Observable<any> {
    return this.restClientService.get('/products/categories');
  }
  postProduct(body: any) {
    return this.restClientService.post('/products', body);
  }
  putProduct(body: any, id: any) {
    return this.restClientService.put(`/products/${id}`, body);
  }
  deleteProduct(id: any) {
    return this.restClientService.delete(`/products/${id}`);
  }

  LimitResults(limit: any): Observable<ProductModel> {
    return this.restClientService.get(`/products/${limit}`);
  }
  SortResults(sort: any): Observable<ProductModel> {
    return this.restClientService.get(`/products?sort=${sort}`);
    // products?sort=desc')
  }
}
