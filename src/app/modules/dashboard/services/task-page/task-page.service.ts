import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskPage } from '../../../../typings';
import { task } from './task-page';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class TaskPageService {
  constructor() {}

  public getTask(): Observable<ITaskPage> {
    return of(task);
  }
}
