import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { AuthService } from '../../../../auth-services/auth.service';
import { ISession } from '../../../../typings';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

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
  public badRequest = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public isDisabled() {
    return !this.data.email || !this.data.password;
  }

  public submit() {
    this.badRequest = false;
    this.authService
      .login(this.data)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 400) {
            this.badRequest = true;
          }
          return of(err);
        })
      )
      .subscribe((res: ISession) => {
        if (res.status !== 400) {
          this.authService.successLogin(res);
        }
      });
  }
}
