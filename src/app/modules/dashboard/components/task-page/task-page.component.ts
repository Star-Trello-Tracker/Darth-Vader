import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage } from '../../../../typings';
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

  constructor(
    private taskPageService: TaskPageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.task$ = this.taskPageService.getTask();
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
}
