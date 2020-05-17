import { Component, Input, OnInit } from '@angular/core';
import { ITask, TaskStatus } from '../../../../../typings';
import { AuthService } from '../../../../../auth-services/auth.service';
import { TaskPageService } from '../../../../dashboard/services/task-page/task-page.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-task-list-row',
  templateUrl: './task-list-row.component.html',
  styleUrls: ['./task-list-row.component.scss'],
})
export class TaskListRowComponent implements OnInit {
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
