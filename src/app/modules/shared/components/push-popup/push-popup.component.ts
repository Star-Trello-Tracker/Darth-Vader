import { Component, Input, OnInit } from '@angular/core';
import { INotification } from '../../../../typings';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-push-popup',
  templateUrl: './push-popup.component.html',
  styleUrls: ['./push-popup.component.scss'],
})
export class PushPopupComponent implements OnInit {
  @Input() list: INotification[];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit(): void {}

  public deleteAll() {
    this.notificationService.deleteAll(this.list);
  }
}
