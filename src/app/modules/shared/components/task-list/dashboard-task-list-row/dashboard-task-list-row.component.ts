import { Component, Input, OnInit } from '@angular/core';
import { ITask, TaskStatus } from '../../../../../typings';
import { AuthService } from '../../../../../auth-services/auth.service';
import { TaskPageService } from '../../../../dashboard/services/task-page/task-page.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dashboard-task-list-row',
  templateUrl: './dashboard-task-list-row.component.html',
  styleUrls: ['./dashboard-task-list-row.component.scss'],
})
export class DashboardTaskListRowComponent implements OnInit {
  @Input() data: ITask;

  public get queueUrl() {
    return `/${this.authService.getId()}/dashboard/${this.commonService.getQueueByTaskKey(
      this.data.key
    )}`;
  }

  public get taskUrl() {
    return `/${this.authService.getId()}/dashboard/task/${this.data.key}`;
  }

  constructor(
    private authService: AuthService,
    private taskPageService: TaskPageService,
    private commonService: CommonService
  ) {}

  public getTaskStatus(status: TaskStatus) {
    return this.taskPageService.getTaskStatus(status);
  }

  ngOnInit(): void {}
}
