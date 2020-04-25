import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../../../typings';
import { BoardsService } from '../../../services/boards/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  public boards$: Observable<IBoard[]>;
  public filterBoards: IBoard[] = [];
  public search = '';

  constructor(private boardsService: BoardsService) {}

  ngOnInit() {
    this.boards$ = this.boardsService.getPersonBoards();
  }

  public find() {
    this.filterBoards = this.boardsService.searchBoard(this.search);
  }
}
