import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isShowNotifications = new BehaviorSubject(false);

  public closeNotifications() {
    this.isShowNotifications.next(false);
  }
}
