import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueue } from '../../../typings';
import { QueuesService } from '../../../services/queues/queues.service';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.scss'],
})
export class QueuesComponent implements OnInit {
  public queues$: Observable<IQueue[]>;
  public filterQueues: IQueue[] = [];
  public search = '';

  constructor(private queuesService: QueuesService) {}

  ngOnInit() {
    this.queues$ = this.queuesService.getPersonQueues();
  }

  public find() {
    this.filterQueues = this.queuesService.searchQueues(this.search);
  }
}
