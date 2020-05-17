import { Injectable } from '@angular/core';
import { taskList } from './task-list';
import { queue } from '../queues/queues-task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask, IUser } from '../../../../typings';
import { CommonService } from '../../../shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private personData: Partial<IUser> = {
    id: 1,
    name: 'Авдеев Иван',
  };
  private taskMap = {
    1: 'priority',
    2: 'key',
    3: 'status',
    4: 'refresh',
  };

  constructor(private commonService: CommonService) {}

  public getQueues(): string[] {
    const queuesList = Array.from(
      new Set(
        taskList
          .map((el: ITask) => {
            return this.commonService.getQueueByTaskKey(el.key);
          }, [])
          .sort()
      )
    );
    queuesList.splice(0, 0, 'Все');

    return queuesList;
  }

  public getTasksByQueue(queueName: string): Observable<ITask[]> {
    return of(
      taskList.filter((el: ITask) => {
        return this.commonService.getQueueByTaskKey(el.key) === queueName;
      })
    );
  }

  public getDefaultTaskList(isQueue: boolean): Observable<ITask[]> {
    if (!isQueue) {
      return this.getAllTasksList();
    }

    return this.getQueueTasksList();
  }

  public getAllTasksList(): Observable<ITask[]> {
    return of(taskList);
  }

  public getQueueTasksList(): Observable<ITask[]> {
    return of(queue.taskList);
  }

  public getFilteredData(
    isQueue: boolean,
    all: boolean,
    author: boolean,
    person: boolean,
    observer: boolean,
    closed: boolean
  ): Observable<ITask[]> {
    if (all) {
      return this.getDefaultTaskList(isQueue);
    }

    const filtered = isQueue ? queue.taskList : taskList;

    if (closed) {
      return of(
        filtered.filter((el: ITask) => {
          return el.status === 6 || el.status === 7;
        })
      );
    }

    return of(
      filtered.filter((el) => {
        return (
          (author && el.creator.name === this.personData.name) ||
          (person && el.person && el.person.name === this.personData.name) ||
          (observer &&
            el.observer &&
            el.observer.filter((u: IUser) => u.name === this.personData.name)
              .length > 0)
        );
      })
    );
  }

  public sortBySelectedColumn(
    isQueue: boolean,
    column: number,
    order: boolean
  ): Observable<ITask[]> {
    const filtered = isQueue ? queue.taskList : taskList;
    const selected = this.taskMap[column];

    if (column !== 2) {
      return of(
        filtered.sort((a: ITask, b: ITask) => {
          return order ? a[selected] - b[selected] : b[selected] - a[selected];
        })
      );
    }

    return of(
      filtered.sort((a: ITask, b: ITask) => {
        if (a[selected] === b[selected]) {
          return 0;
        }

        if (a[selected] > b[selected]) {
          return (-1) ** (+order + 1);
        }

        if (a[selected] < b[selected]) {
          return (-1) ** (+order + 2);
        }
      })
    );
  }
}
