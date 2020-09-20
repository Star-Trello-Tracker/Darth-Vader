import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { INotification } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private isDeleting = false;
  private notifications$: Observable<INotification[]>;

  private notificationsMap = {
    CALLED_IN_COMMENT: 'призывает Вас в комментарии в задаче',
    TASK_PRIORITY_UPDATED: 'изменил приоритет задачи',
    TASK_STATUS_UPDATED: 'изменил статус задачи',
    TASK_DESCRIPTION_UPDATED: 'изменил описание задачи',
    ASSIGNED_TO_TASK: 'назначил Вас исполнителем задачи',
    TASK_TITLE_UPDATED: 'изменил название задачи',
    ADDED_TO_OBSERVERS: 'добавил вас наблюдателем за задачей',
    ADDED_COMMENT_IN_TASK: 'добавил комментарий к задаче',
  };

  constructor(private httpClient: HttpClient) {}

  public getNotificationText(type: string): string {
    return this.notificationsMap[type];
  }

  public getNotifications(): Observable<INotification[]> {
    if (!this.isDeleting) {
      this.notifications$ = this.httpClient.get<INotification[]>(
        `${environment.url}notifications`
      );
    }
    return this.notifications$;
  }

  public deleteNotification(id: number, isAll?: boolean): void {
    this.isDeleting = true;
    this.httpClient
      .post<INotification>(`${environment.url}notifications/delete/${id}`, {})
      .subscribe((res) => {
        if (isAll) {
          this.isDeleting = false;
        }
      });
  }

  public deleteAll(notifications: INotification[]) {
    this.isDeleting = true;
    forkJoin(
      notifications.map((notification: INotification) =>
        this.deleteNotification(notification.id, true)
      )
    );
  }
}
