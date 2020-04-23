import { Injectable } from '@angular/core';
import { data } from './data';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { ITask } from '../typings';
import { IUser } from '../typings/IUser';

@Injectable({
  providedIn: 'root',
})
export class DashboardTaskListService {
  private personData = 'Авдеев Иван';

  constructor() {}

  public getDefaultTaskList(): Observable<ITask[]> {
    return of(data);
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
      data.filter((el) => {
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
