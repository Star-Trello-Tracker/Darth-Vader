import { Component, OnInit } from '@angular/core';
import { IQueue, IUser } from '../../typings';
import { BoardsService } from '../../services/boards.service';
import { Router } from '@angular/router';

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

  constructor(private queuesService: BoardsService, private router: Router) {}

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
      title: this.title,
      description: this.description,
      creator: this.creator,
      link: this.title,
    };

    this.queuesService.createQueue(queue).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/123/dashboard/menu/queues');
    });
  }
}
