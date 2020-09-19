import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IComment,
  ITask,
  IUser,
  TaskPriority,
  TaskStatus,
} from '../../../../typings';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { AuthService } from '../../../../auth-services/auth.service';
import { CommonService } from '../../../shared/services/common.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommentsService } from '../../services/comments/comments.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  public task$: Observable<ITask>;
  public usernames$: Observable<string[]>;

  public username = '';

  public isUpdate = false;

  public showTask = true;
  public showAttachments = false;
  public hasClipboard = !!navigator.clipboard;
  public taskKey = this.router.url.split('/').pop();

  public assignUsername = '';

  public isEditTitle = false;
  public taskTitle = '';

  public isEditDescription = false;
  public description = '';

  public get statusList(): string[] {
    return this.taskPageService.getTaskStatusList();
  }

  public get priorityList(): string[] {
    return this.taskPageService.getTaskPriorityList();
  }

  constructor(
    private taskPageService: TaskPageService,
    private authService: AuthService,
    private commonService: CommonService,
    private router: Router,
    private userService: UserService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.getTaskData();
    this.taskPageService
      .getUsername(this.authService.getId())
      .subscribe((res) => {
        this.username = res;
      });
    this.taskPageService.getTask(this.taskKey).subscribe((res: ITask) => {
      this.taskTitle = res.title;
      this.description = res.description;
      this.assignUsername = res.assignee?.username;
      console.log(res);
    });
    this.usernames$ = this.userService.getAllUsernames();
  }

  private getTaskData() {
    this.task$ = this.taskPageService.getTask(this.taskKey);
  }

  public getTaskPriority(priority: TaskPriority): string {
    return this.taskPageService.getPriorityByEnam(priority);
  }

  public getTaskStatus(status: string): string {
    return this.taskPageService.getStatusByEnum(status);
  }

  public toggle(tab: boolean) {
    this.showTask = tab;
  }

  public toggleAttachments() {
    this.showAttachments = !this.showAttachments;
  }

  public getQueue(key: string) {
    return this.commonService.getQueueByTaskKey(key);
  }

  public getQueueLink(key: string) {
    return `/${this.authService.getId()}/dashboard/${this.commonService.getQueueByTaskKey(
      key
    )}`;
  }

  public copy(task: ITask) {
    navigator.clipboard.writeText(`${task.key}: ${task.title}`).catch((err) => {
      console.log('Something went wrong', err);
    });
  }

  public changeStatus(event: Event, taskId: number) {
    this.isUpdate = true;
    this.taskPageService
      .changeTaskStatus(
        // @ts-ignore
        (event.target.options.selectedIndex + 1) as TaskStatus,
        taskId
      )
      .subscribe((res) => {
        this.getTaskData();
        this.isUpdate = false;
      });
  }

  public closeTask(taskId: number) {
    this.isUpdate = true;
    this.taskPageService.changeTaskStatus(7, taskId).subscribe((res) => {
      this.getTaskData();
      this.isUpdate = false;
    });
  }

  public openTask(taskId: number) {
    this.isUpdate = true;
    this.taskPageService.changeTaskStatus(1, taskId).subscribe((res) => {
      this.getTaskData();
      this.isUpdate = false;
    });
  }

  public changePriority(event: Event, taskId: number) {
    this.isUpdate = true;
    this.taskPageService
      .changeTaskPriority(
        // @ts-ignore
        (event.target.options.selectedIndex + 1) as TaskPriority,
        taskId
      )
      .subscribe((res) => {
        this.getTaskData();
        this.isUpdate = false;
      });
  }

  public getAssigneeName(person: IUser) {
    if (!person) {
      return 'Не назначен';
    }

    return `${person.name} ${person.surname}`;
  }

  public canAssignUser(id: number): boolean {
    return id === parseInt(this.authService.getId(), 10);
  }

  public assignUser(event: Event, id: number) {
    this.isUpdate = true;
    // @ts-ignore
    this.assignUsername = event.target.value;
    this.taskPageService
      .assignUser(this.assignUsername, id)
      .subscribe((res) => {
        this.getTaskData();
        this.isUpdate = false;
      });
  }

  public editTitle() {
    this.isEditTitle = true;
  }

  public saveTitle(id: number) {
    this.isUpdate = true;
    this.taskPageService.editTitle(this.taskTitle, id).subscribe((res) => {
      this.getTaskData();
      this.isEditTitle = false;
      this.isUpdate = false;
    });
  }

  public saveDescription(id: number) {
    this.isUpdate = true;
    this.taskPageService
      .editDescription(this.description, id)
      .subscribe((res) => {
        this.getTaskData();
        this.isEditDescription = false;
        this.isUpdate = false;
      });
  }

  public notObserver(observers: IUser[]): boolean {
    return observers.every((element) => {
      return element.id !== parseInt(this.authService.getId(), 10);
    });
  }

  public setObserver(id: number) {
    this.isUpdate = true;
    this.taskPageService.setObserver(id).subscribe((res) => {
      this.getTaskData();
      this.isUpdate = false;
    });
  }

  public assignYourself(id: number) {
    this.isUpdate = true;
    this.taskPageService.assignUser(this.username, id).subscribe((res) => {
      this.getTaskData();
      this.isUpdate = false;
    });
  }

  public checkAbilityToUpdateInfo(task: ITask) {
    const id = parseInt(this.authService.getId(), 10);
    return id === task.creator.id || (task.assignee && id === task.assignee.id);
  }

  public createComment(comment: IComment) {
    this.commentsService.createComment(comment).subscribe((res) => {
      this.getTaskData();
    });
  }

  editComment(comment: IComment) {
    this.commentsService.editComment(comment).subscribe((res) => {
      this.getTaskData();
    });
  }

  public deleteCommentById(id: number) {
    this.commentsService.deleteComment(id).subscribe((res) => {
      this.getTaskData();
    });
  }
}
