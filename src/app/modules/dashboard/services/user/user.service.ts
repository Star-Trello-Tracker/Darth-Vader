import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getUserData(): Observable<IUser> {
    return this.httpClient.get<IUser>(
      `${environment.url}user/${this.authService.getId()}`
    );
  }

  public getAllUsernames(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.url}user/fullnames`);
  }
}
