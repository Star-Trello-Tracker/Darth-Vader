import { Component, Input, OnInit } from '@angular/core';
import { ITask, TaskStatus } from '../../../../../typings';
import { AuthService } from '../../../../../auth-services/auth.service';
import { TaskPageService } from '../../../../dashboard/services/task-page/task-page.service';

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

  constructor(
    private authService: AuthService,
    private taskPageService: TaskPageService
  ) {}

  public getTaskStatus(status: TaskStatus) {
    return this.taskPageService.getTaskStatus(status);
  }

  ngOnInit(): void {}
}
