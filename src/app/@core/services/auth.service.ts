import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private userService: UsersService,
    private loginService: LoginService,
  ) { 
    this.currentUser$ = LocalStorageService.read('token') ? LocalStorageService.read('token') : '';
  }

  public get currentUserValue(): any {
    return this.currentUser$?.value;
  }


  public login(body: any) {}
    

  getDataUser(body:any){

  }
  setDataLogin(body:any){

  }

  public decodeToken(token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    console.log("tokenAfterDecode",jsonPayload);
    return JSON.parse(jsonPayload);
    
  }
}
