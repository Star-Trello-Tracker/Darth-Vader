import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../../typings';
import { QueuesTaskListService } from '../../services/queues-task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss'],
})
export class QueueListComponent implements OnInit {
  public list$: Observable<ITask[]>;
  public queue = this.router.url.split('/').pop();

  constructor(
    private queuesTaskListService: QueuesTaskListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.list$ = this.queuesTaskListService.getTaskListByQueue('');
  }
}
