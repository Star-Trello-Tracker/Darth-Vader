import { Injectable } from '@angular/core';
import { data, ITask } from './data';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

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
          (author && el.creator === this.personData) ||
          (person && el.person === this.personData) ||
          (observer && el.observer === this.personData)
        );
      })
    );
  }
}
