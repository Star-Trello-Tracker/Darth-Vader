import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../../../typings';
import { TaskListService } from '../../../../dashboard/services/task-list/task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
})
export class TaskListPageComponent implements OnInit {
  @Input() queue = false;
  private path = this.router.url.split('/').pop();

  public original: ITask[];
  public list: ITask[];

  public all = true;
  public author = false;
  public assignee = false;
  public observer = false;
  public closed = false;

  public queuesList = ['Все'];
  public selectedQueue = 0;

  public get selected() {
    return this.queuesList[this.selectedQueue];
  }

  constructor(
    private taskListService: TaskListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskListService
      .getDefaultTaskList(this.queue, this.path)
      .subscribe((res) => {
        this.original = res;
        this.list = res;
      });
    this.taskListService.getQueues().subscribe((res) => {
      this.queuesList = res;
      this.queuesList.unshift('Все');
    });
  }

  public toggle(item: string) {
    if (item !== 'all') {
      this.all = false;
    } else {
      this.author = false;
      this.assignee = false;
      this.observer = false;
      this.closed = false;
    }
    this[item] = !this[item];

    if (!this.author && !this.assignee && !this.observer && !this.closed) {
      this.all = true;
    }
    this.getData(this.original);
  }

  private getData(list: ITask[]) {
    this.taskListService
      .getFilteredData(
        list,
        this.queue,
        this.all,
        this.author,
        this.assignee,
        this.observer,
        this.closed,
        this.path
      )
      .subscribe((res) => {
        this.list = res;
      });
  }

  public sortByColumn(selected: { column: number; order: boolean }) {}

  public selectQueue(event: Event) {
    // @ts-ignore
    this.selectedQueue = event.target.options.selectedIndex;
    if (this.selectedQueue === 0) {
      this.taskListService.getDefaultTaskList(false).subscribe((res) => {
        this.list = res;
      });
      return;
    }
    this.taskListService
      .getTasksByQueue(this.original, this.queuesList[this.selectedQueue])
      .subscribe((res) => {
        this.list = res;
      });
  }
}
