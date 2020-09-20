import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../../services/create-task/create-task.service';
import { Observable } from 'rxjs';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public queues$: Observable<string[]>;
  public usernames$: Observable<string[]>;

  public isPreview = false;

  public selectedObservers = [];
  public selectedQueue = 0;
  public selectedPriority = 1;
  public selectedAssignee = -1;
  public selectedAssigneeUsername = '';
  public taskTitle = '';
  public taskDescription = '';

  public get prioritiesList() {
    return this.taskPageService.getTaskPriorityList();
  }

  public get isDisabled() {
    return this.taskTitle === '' || this.taskDescription === '';
  }

  constructor(
    private createTaskService: CreateTaskService,
    private taskPageService: TaskPageService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.queues$ = this.createTaskService.getAllQueues();
    this.usernames$ = this.userService.getAllUsernames();
  }

  public getSelectedPriority() {
    return this.taskPageService.getTaskPriority(this.selectedPriority);
  }

  public getSelectedQueue(queues: string[]) {
    return queues[this.selectedQueue];
  }

  public changeSelectedQueue(event: Event) {
    // @ts-ignore
    this.selectedQueue = event.target.options.selectedIndex;
  }

  public changeSelectedPriority(event: Event) {
    // @ts-ignore
    this.selectedPriority = event.target.options.selectedIndex + 1;
  }

  public getSelectedAssignee(usernames: string[]) {
    return this.selectedAssignee === -1
      ? 'Не назначено'
      : `${usernames[this.selectedAssignee][1] || ''} ${
          usernames[this.selectedAssignee][2] || ''
        }`;
  }

  public changeSelectedAssignee(event: Event, username: string[]) {
    // @ts-ignore
    this.selectedAssignee = event.target.options.selectedIndex - 1;
    this.selectedAssigneeUsername = username[this.selectedAssignee]
      ? username[this.selectedAssignee][0]
      : 'Не назначено';
  }

  public changeSelectedObservers(event: Event) {
    // @ts-ignore
    const username = event.target.value;
    // @ts-ignore
    const index = event.target.options.selectedIndex;

    if (index === 0) {
      return;
    }
    if (index === 1) {
      this.selectedObservers = [];
      return;
    }

    if (!this.selectedObservers.includes(username)) {
      this.selectedObservers.push(username.split(','));
    }
  }

  public notSelected(usernames: string[]) {
    return usernames.filter((el) => {
      return !this.selectedObservers.includes(el);
    });
  }

  public getSelectedObservers() {
    if (this.selectedObservers.length === 0) {
      return 'Не выбраны';
    }

    return this.selectedObservers.map((el) => `${el[1]} ${el[2]}`).join(', ');
  }

  public createTask(queues: string[]) {
    if (this.isDisabled) {
      return;
    }

    const data = {
      title: this.taskTitle,
      description: this.taskDescription,
      priorityCode: this.selectedPriority,
      queueTitle: this.getSelectedQueue(queues),
      assignee: this.selectedAssigneeUsername,
      observers: this.selectedObservers.map((el) => el[0]),
    };

    this.createTaskService.createTask(data).subscribe((res: any) => {
      this.router.navigateByUrl(
        `${this.authService.getId()}/dashboard/task/${res.key}`
      );
    });
  }

  editToggle(isPreview: boolean) {
    this.isPreview = isPreview;
  }
}
