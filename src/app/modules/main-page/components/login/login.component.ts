import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login = '';
  public password = '';

  constructor() {}

  ngOnInit(): void {}

  public isDisabled() {
    return !this.login || !this.password;
  }

  public submit() {}
}
