import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';
import { IQueue } from '../../../../typings';
import { Router } from '@angular/router';
import { BoardsService } from '../../services/boards/boards.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  public title = '';

  public get back2Boards() {
    return `/${this.authService.getId()}/dashboard/menu/boards`;
  }

  constructor(
    private boardService: BoardsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public submit() {
    const board: any = {
      text: this.title,
    };

    this.boardService.createBoard(board).subscribe((res: any) => {
      this.router.navigateByUrl(
        `/${this.authService.getId()}/dashboard/board/${res.id}`
      );
    });
  }
}
