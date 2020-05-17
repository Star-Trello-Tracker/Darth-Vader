import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss'],
})
export class TaskListHeaderComponent implements OnInit {
  @Output() selectedColumn = new EventEmitter();
  public increase = true;
  public selected = 4;

  constructor() {}

  ngOnInit(): void {}

  public selectColumn(column: number) {
    this.selected = column;
    this.selectedColumn.emit({ column, order: this.increase });
    this.increase = !this.increase;
  }
}
