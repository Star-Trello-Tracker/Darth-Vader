import { Component, Input, OnInit } from '@angular/core';
import { IQueue } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: [
    './queue.component.scss',
    '../../common-styles/queue-board.styles.scss',
  ],
})
export class QueueComponent implements OnInit {
  @Input() queue: IQueue;

  public get userId() {
    return this.authService.getId();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
