import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IBoard } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor() {}

  public getPersonBoards(): Observable<IBoard[]> {
    return of([]);
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
