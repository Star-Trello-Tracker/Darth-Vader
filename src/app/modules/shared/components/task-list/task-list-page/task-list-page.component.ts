import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../../../typings';
import { TaskListService } from '../../../../dashboard/services/task-list/task-list.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
})
export class TaskListPageComponent implements OnInit {
  @Input() queue = false;
  private path = this.router.url.split('/').pop();

  public list$: Observable<ITask[]>;

  public all = true;
  public author = false;
  public person = false;
  public observer = false;
  public closed = false;

  public queuesList: string[];
  public selectedQueue = 0;

  public get selected() {
    return this.queuesList[this.selectedQueue];
  }

  constructor(
    private taskListService: TaskListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.list$ = this.taskListService.getDefaultTaskList(this.queue, this.path);
    this.queuesList = this.taskListService.getQueues();
  }

  public toggle(item: string) {
    if (item !== 'all') {
      this.all = false;
    } else {
      this.author = false;
      this.person = false;
      this.observer = false;
      this.closed = false;
    }
    this[item] = !this[item];

    if (!this.author && !this.person && !this.observer && !this.closed) {
      this.all = true;
    }
    this.getData();
  }

  private getData() {
    this.list$ = this.taskListService.getFilteredData(
      this.queue,
      this.all,
      this.author,
      this.person,
      this.observer,
      this.closed
    );
  }

  public sortByColumn(selected: { column: number; order: boolean }) {
    this.list$ = this.taskListService.sortBySelectedColumn(
      this.queue,
      selected.column,
      selected.order
    );
  }

  public selectQueue(event: Event) {
    // @ts-ignore
    this.selectedQueue = event.target.options.selectedIndex;
    if (this.selectedQueue === 0) {
      this.list$ = this.taskListService.getDefaultTaskList(false);
      return;
    }
    this.list$ = this.taskListService.getTasksByQueue(
      this.queuesList[this.selectedQueue]
    );
  }
}
