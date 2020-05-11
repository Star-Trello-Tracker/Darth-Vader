import { Injectable } from '@angular/core';
import { taskList } from './task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask, IUser } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class DashboardTaskListService {
  private personData = 'Авдеев Иван';
  private taskMap = {
    1: 'priority',
    2: 'key',
    3: 'status',
    4: 'refresh',
  };

  constructor() {}

  public getDefaultTaskList(): Observable<ITask[]> {
    return of(taskList);
  }

  public getFilteredData(
    all: boolean,
    author: boolean,
    person: boolean,
    observer: boolean,
    closed: boolean
  ): Observable<ITask[]> {
    if (all) {
      return this.getDefaultTaskList();
    }

    if (closed) {
      return of(
        taskList.filter((el: ITask) => {
          return el.status === 6 || el.status === 7;
        })
      );
    }

    return of(
      taskList.filter((el) => {
        return (
          (author && el.creator.name === this.personData) ||
          (person && el.person && el.person.name === this.personData) ||
          (observer &&
            el.observer &&
            el.observer.filter((u: IUser) => u.name === this.personData)
              .length > 0)
        );
      })
    );
  }

  public sortBySelectedColumn(
    column: number,
    order: boolean
  ): Observable<ITask[]> {
    const selected = this.taskMap[column];

    if (column !== 2) {
      return of(
        taskList.sort((a: ITask, b: ITask) => {
          return order ? a[selected] - b[selected] : b[selected] - a[selected];
        })
      );
    }

    return of(
      taskList.sort((a: ITask, b: ITask) => {
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
