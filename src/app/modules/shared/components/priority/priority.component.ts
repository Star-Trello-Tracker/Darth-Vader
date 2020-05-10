import { Component, Input, OnInit } from '@angular/core';
import { TaskPriority } from '../../../../typings';
import { TaskPageService } from '../../../dashboard/services/task-page/task-page.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})
export class PriorityComponent implements OnInit {
  @Input() priority: TaskPriority;

  public get placeholder() {
    return this.taskPageService.getTaskPriority(this.priority);
  }

  constructor(private taskPageService: TaskPageService) {}

  ngOnInit(): void {}
}
