import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  public get id() {
    return this.authService.getId();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
