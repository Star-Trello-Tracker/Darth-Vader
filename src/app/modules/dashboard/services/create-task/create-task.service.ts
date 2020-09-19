import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskService {
  constructor(private httpClient: HttpClient) {}

  public getAllQueues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.url}queues/titles`);
  }

  public createTask(task) {
    return this.httpClient.post(`${environment.url}tasks`, task);
  }
}
