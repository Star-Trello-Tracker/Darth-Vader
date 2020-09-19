import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoPageService } from '../../services/user-info-page.service';
import { AuthService } from '../../../../auth-services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public userData$: Observable<any>;
  public isCanEdit =
    this.router.snapshot.parent.paramMap.get('userId') ===
    this.authService.getId();

  constructor(
    private userInfoPageService: UserInfoPageService,
    private authService: AuthService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userData$ = this.userInfoPageService.getUserInfo(
      this.router.parent.snapshot.paramMap.get('userId')
    );
  }

  public getUserFullname(surname: string, name: string) {
    return `${surname} ${name}`;
  }
}
