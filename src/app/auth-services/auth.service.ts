import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = new BehaviorSubject(!!localStorage.getItem('userName'));
  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));

  constructor(private router: Router) {}

  public login() {
    localStorage.setItem('id', '1');
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', 'Авдеев Иван');
    localStorage.setItem('token', '123456');
    this.isAuth.next(true);

    this.router.navigateByUrl(`/${localStorage.getItem('id')}/dashboard`);
  }

  public logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    this.isAuth.next(false);

    this.router.navigateByUrl(`/`);
  }

  public getId() {
    return localStorage.getItem('id');
  }

  public getName() {
    return localStorage.getItem('userName');
  }
}
