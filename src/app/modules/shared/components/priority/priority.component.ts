import { Component, Input, OnInit } from '@angular/core';
import { TaskPageService } from '../../../dashboard/services/task-page/task-page.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})
export class PriorityComponent implements OnInit {
  @Input() priority;
  public priorityId = 1;

  public get placeholder() {
    return this.taskPageService.getPriorityByEnam(this.priority);
  }

  constructor(private taskPageService: TaskPageService) {}

  ngOnInit(): void {
    this.priorityId = this.taskPageService.getPriorityId(this.placeholder) + 1;
  }
}
