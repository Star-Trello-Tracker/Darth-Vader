import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardTaskListService } from '../../services/task-list/dashboard-task-list.service';
import { ITask } from '../../../../typings';

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
  public closed = false;

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
      this.closed = false;
    }
    this[item] = !this[item];

    if (!this.author && !this.person && !this.observer && !this.closed) {
      this.all = true;
    }
    this.getData();
  }

  private getData() {
    this.list$ = this.dashboardService.getFilteredData(
      this.all,
      this.author,
      this.person,
      this.observer,
      this.closed
    );
  }

  public sortByColumn(selected: { column: number; order: boolean }) {
    this.list$ = this.dashboardService.sortBySelectedColumn(
      selected.column,
      selected.order
    );
  }
}
