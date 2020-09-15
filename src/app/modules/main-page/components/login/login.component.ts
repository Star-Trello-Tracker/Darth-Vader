import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { AuthService } from '../../../../auth-services/auth.service';
import { ISession } from '../../../../typings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public inputs = config;
  public data = {
    email: '',
    password: '',
  };
  public deviceWidth = window.innerWidth;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public isDisabled() {
    return !this.data.email || !this.data.password;
  }

  public submit() {
    this.authService.login(this.data).subscribe((res: ISession) => {
      if (res.token) {
        this.authService.successLogin(res);
      }
    });
  }
}
