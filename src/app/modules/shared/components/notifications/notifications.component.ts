import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { INotification } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Input() show: boolean;
  public list: INotification[] = [];
  private timerId: number;

  constructor(
    private notificationService: NotificationsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getList();
    // @ts-ignore
    this.timerId = setInterval(() => {
      this.getList();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private getList() {
    if (!this.authService.isAuth.getValue()) {
      clearInterval(this.timerId);
      return;
    }
    this.notificationService.getNotifications().subscribe((res) => {
      if (res.length !== this.list.length) {
        this.list = res;
      }
    });
  }

  public stop(event: MouseEvent) {
    event.stopPropagation();
  }
}
