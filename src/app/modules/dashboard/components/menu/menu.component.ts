import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public boards = true;
  public queues = false;
  public tasks = false;
  public search = false;

  private fields = ['boards', 'queues', 'tasks', 'search'];

  constructor() {}

  ngOnInit(): void {}

  public toggle(field: string) {
    this[field] = true;
    this.fields.forEach((f) => {
      if (f !== field) {
        this[f] = false;
      }
    });
  }
}
