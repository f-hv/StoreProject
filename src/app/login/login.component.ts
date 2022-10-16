import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER } from '../@core/models/user.model';
import { AuthService } from '../@core/services/auth.service';
import { UsersService } from '../@core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: USER[] = [];
  loginForm: FormGroup | undefined;
  constructor(
    private usersService: UsersService,
    private autService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initial();
  }
  initial() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const userInfo = this.loginForm?.value;
    if (this.loginForm?.valid) {
      const resualtLogin = this.autService.login(userInfo);
      console.log("res",resualtLogin);
    }
  }
}
