import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';
import { INotification } from '../../../../typings';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-push-popup-item',
  templateUrl: './push-popup-item.component.html',
  styleUrls: ['./push-popup-item.component.scss'],
})
export class PushPopupItemComponent implements OnInit {
  @Input() push: INotification;

  public get id() {
    return this.authService.getId();
  }

  public get notificationText() {
    return this.notificationsService.getNotificationText(this.push.type);
  }

  constructor(
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {}

  public delete(id: number) {
    this.notificationsService.deleteNotification(id);
  }
}
