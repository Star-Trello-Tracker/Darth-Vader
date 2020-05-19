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
      setTimeout(() => {
        this.data = notifications;
        this.isTrue = true;
      }, 5000);
    }

    return of(this.data);
  }

  public deleteNotification(id: number) {
    this.data = this.data.filter((elem) => elem.id !== id);
  }

  public deleteAll() {
    this.data = [];
  }
}
