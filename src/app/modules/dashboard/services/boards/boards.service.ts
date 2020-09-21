import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../../../../typings';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private taskStatusMap = {
    OPEN: 'Open',
    IN_PROGRESS: 'In progress',
    NEED_INFO: 'Need info',
    IN_REVIEW: 'In review',
    TESTING: 'Testing',
    SOLVED: 'Solved',
    CLOSED: 'Closed',
  };

  constructor(private httpClient: HttpClient) {}

  public getTaskStatus(status: string): string {
    return this.taskStatusMap[status];
  }

  public getTaskStatusList(): string[] {
    return Object.values(this.taskStatusMap);
  }

  public createBoard(board: any): Observable<IBoard> {
    return this.httpClient.post<IBoard>(
      `${environment.url}board/create`,
      board
    );
  }

  public getPersonBoards(): Observable<IBoard[]> {
    return this.httpClient.get<IBoard[]>(`${environment.url}board/all`);
  }

  public getBoardById(id: string): Observable<IBoard> {
    return this.httpClient.get<IBoard>(`${environment.url}board/${id}`);
  }

  public addTaskToBoard(id: string, key: string): Observable<IBoard> {
    return this.httpClient.post<IBoard>(`${environment.url}board/${id}/add`, {
      text: key,
    });
  }

  public searchBoard(boards: IBoard[], name: string): IBoard[] {
    if (name === '') {
      return [];
    }

    return boards.filter((b) => {
      return b.title.toLowerCase().includes(name.toLowerCase());
    });
  }
}
