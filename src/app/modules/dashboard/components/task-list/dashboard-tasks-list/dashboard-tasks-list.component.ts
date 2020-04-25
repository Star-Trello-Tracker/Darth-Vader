import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardTaskListService } from '../../../services/task-list/dashboard-task-list.service';
import { ITask } from '../../../typings';

@Component({
  selector: 'app-dashboard-tasks-list',
  templateUrl: './dashboard-tasks-list.component.html',
  styleUrls: ['./dashboard-tasks-list.component.scss'],
})
export class DashboardTasksListComponent implements OnInit {
  @Input() dashboard = false;

  public list$: Observable<ITask[]>;

  public all = true;
  public author = false;
  public person = false;
  public observer = false;

  constructor(private dashboardService: DashboardTaskListService) {}

  ngOnInit(): void {
    this.list$ = this.dashboardService.getDefaultTaskList();
  }

  public toggle(item: string) {
    if (item !== 'all') {
      this.all = false;
    } else {
      this.author = false;
      this.person = false;
      this.observer = false;
    }
    this[item] = !this[item];
    this.getData();
  }

  private getData() {
    this.list$ = this.dashboardService.getFilteredData(
      this.all,
      this.author,
      this.person,
      this.observer
    );
  }
}
