import { Injectable } from '@angular/core';
import { queueTaskList } from './queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask } from '../typings';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  constructor() {}

  public getTaskListByQueue(queue: string): Observable<ITask[]> {
    return of(queueTaskList);
  }
}
