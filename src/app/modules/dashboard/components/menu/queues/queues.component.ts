import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueue } from '../../../typings';
import { BoardsService } from '../../../services/boards.service';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.scss'],
})
export class QueuesComponent implements OnInit {
  public queues$: Observable<IQueue[]>;
  public filterQueues: IQueue[] = [];
  public search = '';

  constructor(private boardsService: BoardsService) {}

  ngOnInit() {
    this.queues$ = this.boardsService.getPersonQueues();
  }

  public find() {
    this.filterQueues = this.boardsService.searchQueues(this.search);
  }
}
