import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public data = {
    email: '',
    login: '',
    password1: '',
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
    this.authService.login();
  }

  public isDisabled() {
    return (
      !this.data.email ||
      !this.data.login ||
      !this.data.password1 ||
      !this.data.password2 ||
      this.isInvalidPasswords()
    );
  }

  public isInvalidPasswords() {
    return (
      this.data.password1 &&
      this.data.password2 &&
      this.data.password1 !== this.data.password2
    );
  }
}
