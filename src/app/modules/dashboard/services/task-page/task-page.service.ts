import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage, TaskStatus } from '../../../../typings';
import { task } from './task-page';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class TaskPageService {
  private taskStatus: string[] = [
    'Открыта',
    'В работе',
    'Нужна информация',
    'В ревью',
    'В тестировании',
    'Решена',
    'Закрыта',
  ];

  constructor() {}

  public getTask(): Observable<ITaskPage> {
    return of(task);
  }

  public getTaskStatus(status: TaskStatus): string {
    return this.taskStatus[status - 1];
  }

  public getTaskStatusList(): string[] {
    return this.taskStatus;
  }

  public changeTaskStatus(status: TaskStatus) {
    task.status = status;
  }
}
