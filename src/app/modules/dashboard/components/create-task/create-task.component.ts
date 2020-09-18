import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../../services/create-task/create-task.service';
import { Observable } from 'rxjs';
import { TaskPageService } from '../../services/task-page/task-page.service';
import { TaskPriority } from '../../../../typings';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public queues$: Observable<string[]>;
  public usernames$: Observable<string[]>;

  public selectedObservers = [];
  public selectedQueue = 0;
  public selectedPriority: TaskPriority = 1;
  public selectedAssignee = -1;
  public taskTitle = '';
  public taskDescription = '';

  public get prioritiesList() {
    return this.taskPageService.getTaskPriorityList();
  }

  constructor(
    private createTaskService: CreateTaskService,
    private taskPageService: TaskPageService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.queues$ = this.createTaskService.getAllQueues();
    this.usernames$ = this.createTaskService.getAllUsernames();
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
      : usernames[this.selectedAssignee];
  }

  public changeSelectedAssignee(event: Event) {
    // @ts-ignore
    this.selectedAssignee = event.target.options.selectedIndex - 1;
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
      this.selectedObservers.push(username);
    }
  }

  public notSelected(usernames: string[]) {
    return usernames.filter((el, i) => {
      return !this.selectedObservers.includes(el);
    });
  }

  public getSelectedObservers() {
    if (this.selectedObservers.length === 0) {
      return 'Не выбраны';
    }

    return this.selectedObservers.join(', ');
  }

  public createTask(queues: string[]) {
    const data = {
      title: this.taskTitle,
      description: this.taskDescription,
      priorityCode: this.selectedPriority,
      queueTitle: this.getSelectedQueue(queues),
    };

    this.createTaskService.createTask(data).subscribe((res: any) => {
      this.router.navigateByUrl(
        `${this.authService.getId()}/dashboard/task/${res.key}`
      );
    });
  }
}
