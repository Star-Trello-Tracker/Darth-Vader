import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotification } from '../../typings';
import { AuthService } from '../../../../auth-services/auth.service';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-push-popup-item',
  templateUrl: './push-popup-item.component.html',
  styleUrls: ['./push-popup-item.component.scss'],
})
export class PushPopupItemComponent implements OnInit {
  @Input() push: INotification;
  @Output() deleteNotification = new EventEmitter();

  public get id() {
    return this.authService.getId();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public delete(id: number) {
    this.deleteNotification.emit(id);
  }
}
