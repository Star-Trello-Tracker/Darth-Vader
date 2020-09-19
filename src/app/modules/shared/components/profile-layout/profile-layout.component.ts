import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../../typings';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit {
  @Input() user: IUser;
  constructor() {}

  ngOnInit(): void {}
}
