import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './authorized-header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public notifications = false;
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

  public showNotifications() {
    this.notifications = !this.notifications;
  }
}
