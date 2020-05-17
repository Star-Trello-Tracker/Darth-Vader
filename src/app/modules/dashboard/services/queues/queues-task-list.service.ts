import { Injectable } from '@angular/core';
import { queue } from './queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IQueue } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  constructor() {}

  public getQueue(queueTitle: string): Observable<IQueue> {
    return of(queue);
  }
}
