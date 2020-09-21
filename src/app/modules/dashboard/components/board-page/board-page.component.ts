import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBoard, ITask } from '../../../../typings';
import { BoardsService } from '../../services/boards/boards.service';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
})
export class BoardPageComponent implements OnInit {
  public isLoad = false;
  public board: IBoard;
  public taskKey = '';

  private boardId = this.router.url.split('/').pop();

  public get statusList() {
    return this.boardsService.getTaskStatusList();
  }

  public get canAddTasks() {
    return this.board.creator.id === parseInt(this.authService.getId(), 10);
  }

  constructor(
    private router: Router,
    private boardsService: BoardsService,
    private taskService: TaskPageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getBoard();
  }

  public filterTasks(status: string) {
    return this.board.tasks.filter((task: ITask) => {
      return this.boardsService.getTaskStatus(task.status) === status;
    });
  }

  public addTask() {
    if (this.taskKey.length < 6) {
      return;
    }

    this.isLoad = false;
    this.boardsService
      .addTaskToBoard(this.boardId, this.taskKey)
      .subscribe((res) => {
        this.board = res;
        this.taskKey = '';
        this.isLoad = true;
      });
  }

  private getBoard() {
    this.isLoad = false;
    this.boardsService.getBoardById(this.boardId).subscribe((res: any) => {
      this.board = res;
      this.isLoad = true;
    });
  }

  public changeStatus(data: any) {
    this.isLoad = false;
    this.taskService
      .changeTaskStatus(data.status, data.taskId)
      .subscribe((res) => {
        this.getBoard();
      });
  }
}
