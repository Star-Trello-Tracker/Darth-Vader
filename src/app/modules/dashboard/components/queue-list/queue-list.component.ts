import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../../typings';
import { QueuesTaskListService } from '../../services/queues-task-list.service';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss'],
})
export class QueueListComponent implements OnInit {
  public list$: Observable<ITask[]>;

  constructor(private queuesTaskListService: QueuesTaskListService) {}

  ngOnInit(): void {
    this.list$ = this.queuesTaskListService.getTaskListByQueue('');
  }
}
