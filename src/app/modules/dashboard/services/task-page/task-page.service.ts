import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskPriority } from '../../../../typings';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskPageService {
  private taskStatus: string[] = [
    'Открыта',
    'В работе',
    'Нужна информация',
    'В ревью',
    'В тестировании',
    'Решена',
    'Закрыта',
  ];

  private taskStatusMap = {
    OPEN: 'Открыта',
    IN_PROGRESS: 'В работе',
    NEED_INFO: 'Нужна информация',
    IN_REVIEW: 'В ревью',
    TESTING: 'В тестировании',
    SOLVED: 'Решена',
    CLOSED: 'Закрыта',
  };

  private taskPriority: string[] = [
    'Минор',
    'Средний',
    'Высокий',
    'Блокер',
    'Баг',
    'Критичный баг',
  ];

  private taskPriorityMap = {
    MINOR: 'Минор',
    NORMAL: 'Средний',
    HIGH: 'Высокий',
    BLOCKER: 'Блокер',
    BUG: 'Баг',
    CRITICAL_BUG: 'Критичный баг',
  };

  constructor(private httpClient: HttpClient) {}

  public getAllUsernames(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.url}user/fullnames`);
  }

  public getPriorityByEnam(priority) {
    return this.taskPriorityMap[priority];
  }

  public getPriorityId(priority): number {
    return this.taskPriority.indexOf(priority);
  }

  public getStatusByEnum(status: string) {
    return this.taskStatusMap[status];
  }

  public getStatusId(status: string) {
    return this.taskStatus.indexOf(status) + 1;
  }

  public getTask(path: string): Observable<any> {
    return this.httpClient.get(`${environment.url}tasks/${path}`);
  }

  public getTaskStatusList(): string[] {
    return this.taskStatus;
  }

  public changeTaskStatus(status: number, id: number): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.url}tasks/${id}/status/change`,
      { code: status }
    );
  }

  public getTaskPriority(priority: number): string {
    return this.taskPriority[priority - 1];
  }

  public getTaskPriorityList(): string[] {
    return this.taskPriority;
  }

  public changeTaskPriority(
    priority: TaskPriority,
    id: number
  ): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.url}tasks/${id}/priority/change`,
      { code: priority }
    );
  }

  public editTitle(title: string, taskId: number): Observable<any> {
    return this.httpClient.post(
      `${environment.url}tasks/${taskId}/title/change`,
      { text: title }
    );
  }

  public editDescription(description: string, id: number): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.url}tasks/${id}/description/change`,
      { text: description }
    );
  }

  public assignUser(username: string, id: number): Observable<any> {
    return this.httpClient.post<any>(`${environment.url}tasks/${id}/assign`, {
      text: username,
    });
  }

  public setObserver(taskId: number): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.url}tasks/${taskId}/observe`,
      {}
    );
  }

  public getUsername(id: string): Observable<any> {
    return this.httpClient
      .get(`${environment.url}user/${id}`)
      .pipe(map((res: any) => res.username));
  }
}
