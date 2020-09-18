import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage, TaskPriority, TaskStatus } from '../../../../typings';
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

  private taskStatusMap = {
    OPEN: 'Открыта',
    IN_PROGRESS: 'В работе',
    NEED_INFO: 'Нужна информация',
    IN_REVIEW: 'В ревью',
    TESTING: 'В тестировании',
    SOLVED: 'Решена',
    CLOSED: 'Закрыта',
  };

  private taskPriority: string[] = [
    'Минор',
    'Средний',
    'Высокий',
    'Блокер',
    'Баг',
    'Критичный баг',
  ];

  private taskPriorityMap = {
    MINOR: 'Минор',
    NORMAL: 'Средний',
    HIGH: 'Высокий',
    BLOCKER: 'Блокер',
    BUG: 'Баг',
    CRITICAL_BUG: 'Критичный баг',
  };

  constructor() {}

  public getPriorityByEnam(priority) {
    return this.taskPriorityMap[priority];
  }

  public getPriorityId(priority) {
    return this.taskPriority.indexOf(priority);
  }

  public getStatusByEnum(status) {
    return this.taskStatusMap[status];
  }

  public getStatusId(status) {
    return this.taskStatus.indexOf(status) + 1;
  }

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

  public getTaskPriority(priority: TaskPriority): string {
    return this.taskPriority[priority - 1];
  }

  public getTaskPriorityList(): string[] {
    return this.taskPriority;
  }

  public changeTaskPriority(priority: TaskPriority) {
    task.priority = priority;
  }
}
