import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage, TaskStatus } from '../../../../typings';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { AuthService } from '../../../../auth-services/auth.service';

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

  constructor(
    private taskPageService: TaskPageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.task$ = this.taskPageService.getTask();
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
    return `${key.slice(0, key.indexOf('-'))}`;
  }

  public getQueueLink(key: string) {
    return `/${this.authService.getId()}/dashboard/${key.slice(
      0,
      key.indexOf('-')
    )}`;
  }

  public copy(task: ITaskPage) {
    navigator.clipboard.writeText(`${task.key}: ${task.title}`).catch((err) => {
      console.log('Something went wrong', err);
    });
  }

  public changeStatus(event: Event) {
    // @ts-ignore
    this.taskPageService.changeTaskStatus(
      (event.target.options.selectedIndex + 1) as TaskStatus
    );
    this.task$ = this.taskPageService.getTask();
  }

  public closeTask() {
    this.taskPageService.changeTaskStatus(7);
    this.task$ = this.taskPageService.getTask();
  }
}
