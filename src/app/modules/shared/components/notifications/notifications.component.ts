import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INotification } from '../../typings';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Input() show: boolean;
  public list$: Observable<INotification[]>;
  private timerId: number;

  constructor(private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.getList();
    this.timerId = setInterval(() => {
      this.getList();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private getList() {
    this.list$ = this.notificationService.getNotifications();
  }

  public stop(event: MouseEvent) {
    event.stopPropagation();
  }

  public deleteNotification(id: number) {
    this.list$ = this.notificationService.deleteNotification(id);
  }

  public deleteAllNotifications() {
    this.list$ = this.notificationService.deleteAll();
  }
}
