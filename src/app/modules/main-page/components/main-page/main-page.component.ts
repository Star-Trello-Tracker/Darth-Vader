import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public login = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public isDisabled() {
    return !this.login;
  }

  public onSubmit() {
    this.router.navigateByUrl(`/registration?email=${this.login}`);
  }
}
