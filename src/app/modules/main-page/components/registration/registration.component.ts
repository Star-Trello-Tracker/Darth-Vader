import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';
import { ISession } from '../../../../typings';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public badRequest = false;
  public data = {
    email: '',
    username: '',
    password: '',
    password2: '',
  };
  public inputs = config;
  public deviceWidth = window.innerWidth;

  constructor(
    private router: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const email = this.router.snapshot.queryParamMap.get('email');
    if (email) {
      this.data.email = email;
    }
  }

  public submit() {
    this.badRequest = false;
    this.authService
      .register(this.data)
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
          this.authService.successRegister(res);
        }
      });
  }

  public isDisabled() {
    return (
      !this.data.email ||
      !this.data.username ||
      !this.data.password ||
      !this.data.password2 ||
      this.isInvalidPasswords()
    );
  }

  public isInvalidPasswords() {
    return (
      this.data.password &&
      this.data.password2 &&
      this.data.password !== this.data.password2
    );
  }
}
