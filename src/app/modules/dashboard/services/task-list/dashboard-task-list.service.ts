import { Injectable } from '@angular/core';
import { taskList } from './task-list';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask, IUser } from '../../typings';

@Injectable({
  providedIn: 'root',
})
export class DashboardTaskListService {
  private personData = 'Авдеев Иван';

  constructor() {}

  public getDefaultTaskList(): Observable<ITask[]> {
    return of(taskList);
  }

  public getFilteredData(
    all: boolean,
    author: boolean,
    person: boolean,
    observer: boolean
  ): Observable<ITask[]> {
    if (all) {
      return this.getDefaultTaskList();
    }

    return of(
      taskList.filter((el) => {
        return (
          (author && el.creator.name === this.personData) ||
          (person && el.person.name === this.personData) ||
          (observer &&
            el.observer.filter((u: IUser) => u.name === this.personData)
              .length > 0)
        );
      })
    );
  }
}
