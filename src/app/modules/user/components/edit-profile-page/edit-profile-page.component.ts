import { Component, OnInit } from '@angular/core';
import { UserInfoPageService } from '../../services/user-info-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent implements OnInit {
  public data = {
    name: '',
    surname: '',
    tgUsername: '',
  };

  public isLoad = false;

  constructor(
    private editInfoPageService: UserInfoPageService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editInfoPageService
      .getUserInfo(this.activatedRoute.parent.snapshot.paramMap.get('userId'))
      .subscribe((res) => {
        this.data.name = res.name;
        this.data.surname = res.surname;
        this.data.tgUsername = res.tgUsername;

        this.isLoad = true;
      });
  }

  public isDisabled() {
    return !this.data.name && !this.data.surname;
  }

  public editProfile() {
    this.editInfoPageService.editProfile(this.data).subscribe((res) => {
      this.router.navigateByUrl(`${this.authService.getId()}/profile`);
    });
  }
}
