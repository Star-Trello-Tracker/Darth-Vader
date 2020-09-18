import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISession, IUserCredential } from '../typings';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = new BehaviorSubject(!!localStorage.getItem('userName'));
  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));
  isNotAuth = new BehaviorSubject(!!!localStorage.getItem('isAuth'));

  constructor(private router: Router, private httpClient: HttpClient) {}

  public login(data: Partial<IUserCredential>): Observable<ISession> {
    return this.httpClient.post<ISession>(`${environment.url}login`, data);
  }

  public successLogin(data: ISession) {
    this.setStorage(data);

    this.router.navigateByUrl(`/${localStorage.getItem('id')}/dashboard`);
  }

  public register(data: IUserCredential): Observable<ISession> {
    return this.httpClient.post<ISession>(`${environment.url}register`, data);
  }

  public successRegister(data: any) {
    this.setStorage(data);

    this.router.navigateByUrl(`/${data.userId}/profile/edit`);
  }

  public setStorage(data: any) {
    localStorage.setItem('id', data.userId);
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('token', data.token);
    this.isAuth.next(true);
    this.isNotAuth.next(false);
  }

  public logout() {
    this.httpClient
      .post(`${environment.url}logout`, {
        userId: this.getId(),
        token: this.getToken(),
      })
      .subscribe((res) => {
        localStorage.removeItem('id');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        this.isAuth.next(false);
        this.isNotAuth.next(true);

        this.router.navigateByUrl(`/`);
      });
  }

  public getId(): string {
    return localStorage.getItem('id');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getName() {
    return localStorage.getItem('userName');
  }
}
