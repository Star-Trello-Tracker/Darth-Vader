import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';
import { BoardsService } from '../../services/boards/boards.service';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss'],
})
export class BoardTaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() statusChange = new EventEmitter();
  public isEditStatus = false;

  public get id() {
    return this.authService.getId();
  }

  public get canEditStatus() {
    return parseInt(this.id, 10) === this.task.creator.id;
  }

  constructor(
    private authService: AuthService,
    private boardsService: BoardsService
  ) {}

  ngOnInit(): void {}

  public getTaskList() {
    return this.boardsService.getTaskStatusList().filter((status: string) => {
      return status !== this.boardsService.getTaskStatus(this.task.status);
    });
  }

  changeStatus(status: string) {
    const id = this.boardsService.getTaskStatusList().indexOf(status) + 1;
    this.statusChange.emit({
      status: id,
      taskId: this.task.id,
    });
  }
}
