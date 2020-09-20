import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './authorized-header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() notifications: BehaviorSubject<boolean>;

  public get isAuth() {
    return this.authService.isAuth.getValue();
  }

  public get id() {
    return this.authService.getId();
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public logout() {
    this.authService.logout();
  }

  public showNotifications(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.notifications.next(!this.notifications.getValue());
  }
}
