import { Component, Input, OnInit } from '@angular/core';
import { IBoard } from '../../../typings';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: IBoard;

  constructor() {}

  ngOnInit(): void {}
}
