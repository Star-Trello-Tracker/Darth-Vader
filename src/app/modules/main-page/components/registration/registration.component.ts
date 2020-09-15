import { Component, OnInit } from '@angular/core';
import { config } from './config';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';
import { ISession } from '../../../../typings';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
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
    this.authService.register(this.data).subscribe((res: ISession) => {
      if (res.token) {
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
