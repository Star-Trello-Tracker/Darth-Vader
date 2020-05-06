import { Component, OnInit } from '@angular/core';
import { IQueue, IUser } from '../../../../typings';
import { Router } from '@angular/router';
import { QueuesService } from '../../services/queues/queues.service';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.scss'],
})
export class CreateQueueComponent implements OnInit {
  public title = '';
  public description = '';
  public invalidTitle = false;
  public invalidDescription = false;

  public creator: IUser = {
    id: 1,
    name: 'Авдеев Иван',
    job: 'Разработчик интерфейсов',
    offline: 1123,
  };

  public get back2Queues() {
    return `/${this.authService.getId()}/dashboard/menu/queues`;
  }

  constructor(
    private queuesService: QueuesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public submit() {
    this.invalidTitle = false;
    this.invalidDescription = false;
    if (this.title.length < 4) {
      this.invalidTitle = true;
    }

    if (!this.description) {
      this.invalidDescription = true;
    }

    if (this.invalidTitle || this.invalidDescription) {
      return;
    }

    const queue: IQueue = {
      id: 1,
      title: this.title,
      description: this.description,
      creator: this.creator,
      link: this.title,
      taskList: [],
    };

    this.queuesService.createQueue(queue).subscribe((res) => {
      this.router.navigateByUrl(
        `/${this.authService.getId()}/dashboard/menu/queues`
      );
    });
  }
}
