import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = 'https://fakestoreapi.com';

  constructor(private restClientService: RestClientService) { }

  UserLogin(body: any): Observable<any> {
    return this.restClientService.post('/auth/login',body)
  }
}
