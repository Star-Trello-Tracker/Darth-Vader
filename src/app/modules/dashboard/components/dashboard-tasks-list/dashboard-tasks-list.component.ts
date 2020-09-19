import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../../../typings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-tasks-list',
  templateUrl: './dashboard-tasks-list.component.html',
  styleUrls: ['./dashboard-tasks-list.component.scss'],
})
export class DashboardTasksListComponent implements OnInit {
  public user$: Observable<IUser>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUserData();
  }
}
