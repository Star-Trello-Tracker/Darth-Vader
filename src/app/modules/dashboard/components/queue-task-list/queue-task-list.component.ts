import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IQueue } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';
import { QueuesService } from '../../services/queues/queues.service';

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

  public get id(): string {
    return this.authService.getId();
  }

  constructor(
    private queuesService: QueuesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.queue$ = this.queuesService.getQueue(this.queueTitle);
  }

  public goToCreateTaskPage(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl(`/${this.id}/dashboard/menu/create-task`);
  }
}
