import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';
import { IQueue } from '../../../../typings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  public title = '';
  public description = '';
  public invalidDescription = false;

  public get back2Boards() {
    return `/${this.authService.getId()}/dashboard/menu/boards`;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public submit() {
    this.invalidDescription = false;

    if (!this.description) {
      this.invalidDescription = true;
    }

    if (this.invalidDescription) {
      return;
    }

    const board: any = {
      title: this.title,
      description: this.description,
    };

    console.log(board);

    this.router.navigateByUrl(`/${this.authService.getId()}/dashboard/board/1`);
  }
}
