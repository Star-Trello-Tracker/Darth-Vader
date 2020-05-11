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

  public get back2Queues() {
    return `/${this.authService.getId()}/dashboard/menu/queues`;
  }

  constructor(
    private queuesTaskListService: QueuesTaskListService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.queue$ = this.queuesTaskListService.getTaskListByQueue('');
  }

  public sortByColumn(selected: { column: number; order: boolean }) {
    this.queue$ = this.queuesTaskListService.sortBySelectedColumn(
      selected.column,
      selected.order
    );
  }
}
