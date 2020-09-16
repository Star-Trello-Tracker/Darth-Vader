import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent implements OnInit {
  public data = {
    name: 'Иван',
    surname: 'Авдеев',
    tgUsername: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public editProfile() {}
}
