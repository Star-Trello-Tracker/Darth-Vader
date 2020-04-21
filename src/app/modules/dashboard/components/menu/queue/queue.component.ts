import { Component, Input, OnInit } from '@angular/core';
import { IBoard } from '../../../typings';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  @Input() queue: IBoard;

  constructor() {}

  ngOnInit(): void {}
}
