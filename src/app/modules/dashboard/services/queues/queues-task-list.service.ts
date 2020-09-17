import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueue } from '../../../../typings';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueuesTaskListService {
  constructor(private httpClient: HttpClient) {}

  public getQueue(queueTitle: string): Observable<IQueue> {
    return this.httpClient.get<IQueue>(
      `${environment.url}queues/${queueTitle}`
    );
  }
}
