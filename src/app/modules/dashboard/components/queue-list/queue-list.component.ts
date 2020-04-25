import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueuesTaskListService } from '../../services/queues-task-list.service';
import { Router } from '@angular/router';
import { IQueue } from '../../typings';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss'],
})
export class QueueListComponent implements OnInit {
  public queue$: Observable<IQueue>;
  public queueTitle = this.router.url.split('/').pop();

  constructor(
    private queuesTaskListService: QueuesTaskListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.queue$ = this.queuesTaskListService.getTaskListByQueue('');
  }
}
