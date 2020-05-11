import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-task-list-header',
  templateUrl: './dashboard-task-list-header.component.html',
  styleUrls: ['./dashboard-task-list-header.component.scss'],
})
export class DashboardTaskListHeaderComponent implements OnInit {
  @Output() selectedColumn = new EventEmitter();
  public increase = true;
  public selected = 7;

  constructor() {}

  ngOnInit(): void {}

  public selectColumn(column: number) {
    this.selected = column;
    this.selectedColumn.emit({ column, order: this.increase });
    this.increase = !this.increase;
  }
}
