import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueuesTaskListService } from '../../services/queues/queues-task-list.service';
import { Router } from '@angular/router';
import { IQueue } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-task-list.component.html',
  styleUrls: ['./queue-task-list.component.scss'],
})
export class QueueTaskListComponent implements OnInit {
  public queue$: Observable<IQueue>;
  public queueTitle = this.router.url.split('/').pop();

  public all = true;
  public author = false;
  public person = false;
  public observer = false;
  public closed = false;

  public get back2Queues() {
    return `/${this.authService.getId()}/dashboard/menu/queues`;
  }

  constructor(
    private queuesTaskListService: QueuesTaskListService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.queue$ = this.queuesTaskListService.getFilteredData(
      this.all,
      this.author,
      this.person,
      this.observer,
      this.closed
    );
  }

  public sortByColumn(selected: { column: number; order: boolean }) {
    this.queue$ = this.queuesTaskListService.sortBySelectedColumn(
      selected.column,
      selected.order
    );
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
}
