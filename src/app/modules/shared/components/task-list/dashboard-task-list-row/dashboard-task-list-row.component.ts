import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../../../typings';
import { AuthService } from '../../../../../auth-services/auth.service';

@Component({
  selector: 'app-dashboard-task-list-row',
  templateUrl: './dashboard-task-list-row.component.html',
  styleUrls: ['./dashboard-task-list-row.component.scss'],
})
export class DashboardTaskListRowComponent implements OnInit {
  @Input() data: ITask;

  public get queueUrl() {
    return `/${this.authService.getId()}/dashboard/${this.data.key.slice(
      0,
      this.data.key.indexOf('-')
    )}`;
  }

  public get taskUrl() {
    return `/${this.authService.getId()}/dashboard/task/${this.data.key}`;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
