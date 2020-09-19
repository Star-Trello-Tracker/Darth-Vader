import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask, IUser } from '../../../../typings';
import { CommonService } from '../../../shared/services/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../auth-services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  constructor(
    private commonService: CommonService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getQueues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.url}queues/titles`);
  }

  public getTasksByQueue(
    list: ITask[],
    queueName: string
  ): Observable<ITask[]> {
    return of(
      list.filter((el: ITask) => {
        return this.commonService.getQueueByTaskKey(el.key) === queueName;
      })
    );
  }

  public getDefaultTaskList(
    isQueue: boolean,
    path?: string
  ): Observable<ITask[]> {
    if (!isQueue) {
      return this.getAllTasksList();
    }

    return this.getQueueTasksList(path);
  }

  public getAllTasksList(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(`${environment.url}tasks/all`);
  }

  public getQueueTasksList(path: string): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(
      `${environment.url}queues/${path}/tasks`
    );
  }

  public getFilteredData(
    list: ITask[],
    isQueue: boolean,
    all: boolean,
    author: boolean,
    assignee: boolean,
    observer: boolean,
    closed: boolean,
    path?: string
  ): Observable<ITask[]> {
    if (all) {
      return this.getDefaultTaskList(isQueue, path);
    }

    if (closed) {
      return of(
        list.filter((el: ITask) => {
          return el.status === 'SOLVED' || el.status === 'CLOSED';
        })
      );
    }

    return of(
      list.filter((el) => {
        return (
          (author &&
            el.creator.id === parseInt(this.authService.getId(), 10)) ||
          (assignee &&
            el.assignee &&
            el.assignee.id === parseInt(this.authService.getId(), 10)) ||
          (observer &&
            el.observers &&
            el.observers.filter(
              (u: IUser) => u.id === parseInt(this.authService.getId(), 10)
            ).length > 0)
        );
      })
    );
  }
}
