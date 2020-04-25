import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IQueue } from '../../typings';
import { queues } from './queues';

@Injectable({
  providedIn: 'root',
})
export class QueuesService {
  constructor() {}

  public getPersonQueues(): Observable<IQueue[]> {
    return of(queues);
  }

  public searchQueues(name: string): IQueue[] {
    if (name === '') {
      return [];
    }

    return queues.filter((b) => {
      return b.title.toLowerCase().includes(name.toLowerCase());
    });
  }

  public createQueue(queue: IQueue): Observable<IQueue> {
    queues.push(queue);
    return of(queue);
  }
}
