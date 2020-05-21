import { Injectable } from '@angular/core';
import { notifications } from './notifications';
import { Observable } from 'rxjs';
import { INotification } from '../../typings';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private isTrue = false;
  private data = [];

  constructor() {}

  public getNotifications(): Observable<INotification[]> {
    if (!this.isTrue) {
      this.isTrue = true;
      setTimeout(() => {
        this.data = notifications;
      }, 5000);
    }

    return of(this.data);
  }

  public deleteNotification(id: number): Observable<INotification[]> {
    this.data = this.data.filter((elem) => elem.id !== id);
    return of(this.data);
  }

  public deleteAll(): Observable<INotification[]> {
    this.data = [];
    return of(this.data);
  }
}
