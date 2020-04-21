import { Injectable } from '@angular/core';
import { boards } from './boards';
import { queues } from './queues';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IBoard } from '../typings';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor() {}

  public getPersonBoards(): Observable<IBoard[]> {
    return of(boards);
  }

  public searchBoard(name: string): IBoard[] {
    if (name === '') {
      return [];
    }

    return boards.filter((b) => {
      return b.title.toLowerCase().includes(name.toLowerCase());
    });
  }

  public getPersonQueues(): Observable<IBoard[]> {
    return of(queues);
  }

  public searchQueues(name: string): IBoard[] {
    if (name === '') {
      return [];
    }

    return queues.filter((b) => {
      return b.title.toLowerCase().includes(name.toLowerCase());
    });
  }
}
