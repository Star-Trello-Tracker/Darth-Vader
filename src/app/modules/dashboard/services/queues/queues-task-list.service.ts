import { Injectable } from '@angular/core';
import { queue } from './queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IQueue, ITask } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  private taskMap = {
    1: 'priority',
    2: 'key',
    3: 'status',
    4: 'refresh',
  };

  constructor() {}

  public getTaskListByQueue(queueName: string): Observable<IQueue> {
    return of(queue);
  }

  public sortBySelectedColumn(
    column: number,
    order: boolean
  ): Observable<IQueue> {
    const selected = this.taskMap[column];

    if (column !== 2) {
      queue.taskList.sort((a: ITask, b: ITask) => {
        return order ? a[selected] - b[selected] : b[selected] - a[selected];
      });
      return of(queue);
    }

    queue.taskList.sort((a: ITask, b: ITask) => {
      if (a[selected] === b[selected]) {
        return 0;
      }

      if (a[selected] > b[selected]) {
        return (-1) ** (+order + 1);
      }

      if (a[selected] < b[selected]) {
        return (-1) ** (+order + 2);
      }
    });

    return of(queue);
  }
}
