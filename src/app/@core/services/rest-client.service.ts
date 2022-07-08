
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  loginError: boolean = false;
  private BASE_URL: string = environment.server_base_address;

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.restHandler('get', url);
  }

  public post(url: string, body: any): Observable<any> {
    const options = { body };
    return this.restHandler('post', url, options);
  }

  public put(url: string, body: any): Observable<any> {
    const options = { body };
    return this.restHandler('put', url, options);
  }
  public patch(url: string, body?: any): Observable<any> {
    const options = { body };
    return this.restHandler('patch', url, options);
  }

  public delete(url: string, body?: any): Observable<any> {
    const options = { body };
    return this.restHandler('delete', url, options);
  }
  private restHandler(requestType: string, url: string, options?: any) {
    const theOptions = {
      body: options ? (options.body ? options.body : null) : null,
    };

    return this.http.request(requestType, this.BASE_URL + url, theOptions);
  }
}
