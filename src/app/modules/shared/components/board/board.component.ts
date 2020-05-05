import { Component, Input, OnInit } from '@angular/core';
import { IBoard } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './board.component.html',
  styleUrls: [
    './board.component.scss',
    '../../common-styles/queue-board.styles.scss',
  ],
})
export class BoardComponent implements OnInit {
  @Input() board: IBoard;

  public get userId() {
    return this.authService.getId();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
