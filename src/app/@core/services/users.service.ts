
import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'restClientServices://fakestoreapi.com';

  constructor(private restClientService:RestClientService) { }

  getUsers(){
    return this.restClientService.get(`/users`)
  }
  GetUser(id: any){
    return this.restClientService.get(`/users/ ${id}`)
  }
  postuser(body: any) {
    return this.restClientService.post('/users', JSON.stringify(body))
  }
  putuser(body: any, id: any) {
    return this.restClientService.put(`/users/ ${id}`, JSON.stringify(body))
  }
  deleteuser(id: any) {
    return this.restClientService.delete(`/users/ ${id}`)
  }

  LimitResults(limit: any){
    return this.restClientService.get(`/users/ ${limit}`)
  }
  SortResults(sort: any){
    return this.restClientService.get(`/users?sort=${sort}`)
  }
}
