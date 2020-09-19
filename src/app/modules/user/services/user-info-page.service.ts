import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInfoPageService {
  constructor(private httpClient: HttpClient) {}

  public getUserInfo(id: string): Observable<any> {
    return this.httpClient.get(`${environment.url}/user/${id}`);
  }

  public editProfile(data): Observable<any> {
    return this.httpClient.post(`${environment.url}user/edit`, data);
  }
}
