import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth-services/auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInfoPageService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getUserInfo(): Observable<any> {
    return this.httpClient.get(
      `${environment.url}/user/${this.authService.getId()}`
    );
  }

  public editProfile(data): Observable<any> {
    return this.httpClient.post(`${environment.url}user/edit`, data);
  }
}
