import { Injectable } from '@angular/core';
import { queue } from './queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IQueue, ITask, IUser } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  private personData = 'Авдеев Иван';
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

  public getFilteredData(
    all: boolean,
    author: boolean,
    person: boolean,
    observer: boolean,
    closed: boolean
  ): Observable<IQueue> {
    if (all) {
      return this.getTaskListByQueue('queue');
    }

    let filtered = [];

    if (closed) {
      filtered = queue.taskList.filter((el: ITask) => {
        return el.status === 6 || el.status === 7;
      });

      return of({
        id: queue.id,
        title: queue.title,
        description: queue.description,
        creator: queue.creator,
        taskList: filtered,
        link: queue.link,
      });
    }

    filtered = queue.taskList.filter((el) => {
      return (
        (author && el.creator.name === this.personData) ||
        (person && el.person && el.person.name === this.personData) ||
        (observer &&
          el.observer &&
          el.observer.filter((u: IUser) => u.name === this.personData).length >
            0)
      );
    });

    return of({
      id: queue.id,
      title: queue.title,
      description: queue.description,
      creator: queue.creator,
      taskList: filtered,
      link: queue.link,
    });
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
