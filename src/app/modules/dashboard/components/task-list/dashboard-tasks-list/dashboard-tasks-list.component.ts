import { Component, OnInit } from '@angular/core';
import { data, ITask } from './data';

@Component({
  selector: 'app-dashboard-tasks-list',
  templateUrl: './dashboard-tasks-list.component.html',
  styleUrls: ['./dashboard-tasks-list.component.scss'],
})
export class DashboardTasksListComponent implements OnInit {
  public list: ITask[] = data;
  public data: ITask[] = data;

  public all = true;
  public author = false;
  public person = false;
  public observer = false;

  private personData = 'Авдеев Иван';

  constructor() {}

  ngOnInit(): void {}

  public toggle(item: string) {
    if (item !== 'all') {
      this.all = false;
    } else {
      this.author = false;
      this.person = false;
      this.observer = false;
    }
    this[item] = !this[item];
    this.list = this.filterData();
  }

  private filterData() {
    if (this.all) {
      return this.data;
    }
    return this.data.filter((el) => {
      return (
        (this.author && el.creator === this.personData) ||
        (this.person && el.person === this.personData) ||
        (this.observer && el.observer === this.personData)
      );
    });
  }
}
