import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../services/data';

@Component({
  selector: 'app-dashboard-task-list-row',
  templateUrl: './dashboard-task-list-row.component.html',
  styleUrls: ['./dashboard-task-list-row.component.scss'],
})
export class DashboardTaskListRowComponent implements OnInit {
  @Input() data: ITask;

  constructor() {}

  ngOnInit(): void {}
}
