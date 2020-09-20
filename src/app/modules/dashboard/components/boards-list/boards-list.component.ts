import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../../../../typings';
import { BoardsService } from '../../services/boards/boards.service';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards-list.component.html',
  styleUrls: [
    './boards-list.component.scss',
    '../../common-styles/boards-queues-list.styles.scss',
  ],
})
export class BoardsListComponent implements OnInit {
  public boards$: Observable<IBoard[]>;
  public filterBoards: IBoard[] = [];
  public search = '';

  public get userId() {
    return this.authService.getId();
  }

  constructor(
    private boardsService: BoardsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.boards$ = this.boardsService.getPersonBoards();
  }

  public find(boards: IBoard[]) {
    this.filterBoards = this.boardsService.searchBoard(boards, this.search);
  }
}
