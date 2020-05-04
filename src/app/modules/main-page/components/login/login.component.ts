import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public inputs = config;
  public data = {
    login: '',
    password: '',
  };
  public deviceWidth = window.innerWidth;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public isDisabled() {
    return !this.data.login || !this.data.password;
  }

  public submit() {
    this.authService.login();
  }
}
