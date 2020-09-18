import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoPageService } from '../../services/user-info-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public userData$: Observable<any>;

  constructor(private userInfoPageService: UserInfoPageService) {}

  ngOnInit(): void {
    this.userData$ = this.userInfoPageService.getUserInfo();
  }

  public getUserFullname(surname: string, name: string) {
    return `${surname} ${name}`;
  }
}
