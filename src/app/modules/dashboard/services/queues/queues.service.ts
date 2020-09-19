import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueue } from '../../../../typings';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueuesService {
  constructor(private httpClient: HttpClient) {}

  public getPersonQueues(): Observable<IQueue[]> {
    return this.httpClient.get<IQueue[]>(`${environment.url}queues`);
  }

  public searchQueues(name: string, queues: IQueue[]): IQueue[] {
    if (name === '') {
      return [];
    }

    return queues.filter((b) => {
      return b.title.toLowerCase().includes(name.toLowerCase());
    });
  }

  public createQueue(queue: Partial<IQueue>): Observable<IQueue> {
    return this.httpClient.post<IQueue>(`${environment.url}queues`, queue);
  }

  public getQueue(queueTitle: string): Observable<IQueue> {
    return this.httpClient.get<IQueue>(
      `${environment.url}queues/${queueTitle}`
    );
  }
}
