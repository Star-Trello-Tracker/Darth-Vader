import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage, TaskPriority, TaskStatus } from '../../../../typings';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { AuthService } from '../../../../auth-services/auth.service';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  public showTask = true;
  public task$: Observable<ITaskPage>;
  public showAttachments = false;
  public hasClipboard = !!navigator.clipboard;

  public get statusList(): string[] {
    return this.taskPageService.getTaskStatusList();
  }

  public get priorityList(): string[] {
    return this.taskPageService.getTaskPriorityList();
  }

  constructor(
    private taskPageService: TaskPageService,
    private authService: AuthService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.task$ = this.taskPageService.getTask();
  }

  public getTaskPriority(priority: TaskPriority): string {
    return this.taskPageService.getTaskPriority(priority);
  }

  public getTaskStatus(status: TaskStatus): string {
    return this.taskPageService.getTaskStatus(status);
  }

  public toggle(tab: boolean) {
    this.showTask = tab;
  }

  public toggleAttachments() {
    this.showAttachments = !this.showAttachments;
  }

  public getQueue(key: string) {
    return this.commonService.getQueueByTaskKey(key);
  }

  public getQueueLink(key: string) {
    return `/${this.authService.getId()}/dashboard/${this.commonService.getQueueByTaskKey(
      key
    )}`;
  }

  public copy(task: ITaskPage) {
    navigator.clipboard.writeText(`${task.key}: ${task.title}`).catch((err) => {
      console.log('Something went wrong', err);
    });
  }

  public changeStatus(event: Event) {
    this.taskPageService.changeTaskStatus(
      // @ts-ignore
      (event.target.options.selectedIndex + 1) as TaskStatus
    );
    this.task$ = this.taskPageService.getTask();
  }

  public closeTask() {
    this.taskPageService.changeTaskStatus(7);
    this.task$ = this.taskPageService.getTask();
  }

  changePriority(event: Event) {
    this.taskPageService.changeTaskPriority(
      // @ts-ignore
      (event.target.options.selectedIndex + 1) as TaskPriority
    );
    this.task$ = this.taskPageService.getTask();
  }
}
