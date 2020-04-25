import { Injectable } from '@angular/core';
import { queue } from './queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IQueue } from '../../typings/IQueue';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  constructor() {}

  public getTaskListByQueue(queueName: string): Observable<IQueue> {
    return of(queue);
  }
}
