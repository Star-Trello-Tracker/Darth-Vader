import { Component, OnInit } from '@angular/core';
import { data, ITask } from './data';

@Component({
  selector: 'app-dashboard-tasks-list',
  templateUrl: './dashboard-tasks-list.component.html',
  styleUrls: ['./dashboard-tasks-list.component.scss'],
})
export class DashboardTasksListComponent implements OnInit {
  public list: ITask[] = data;

  constructor() {}

  ngOnInit(): void {}
}
