import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueue } from '../../../../typings';
import { QueuesService } from '../../services/queues/queues.service';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-queues',
  templateUrl: './queues-list.component.html',
  styleUrls: [
    './queues-list.component.scss',
    '../../common-styles/boards-queues-list.styles.scss',
  ],
})
export class QueuesListComponent implements OnInit {
  public queues$: Observable<IQueue[]>;
  public filterQueues: IQueue[] = [];
  public search = '';

  public get userId() {
    return this.authService.getId();
  }

  constructor(
    private queuesService: QueuesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.queues$ = this.queuesService.getPersonQueues();
  }

  public find(queues: IQueue[]) {
    this.filterQueues = this.queuesService.searchQueues(this.search, queues);
  }
}
