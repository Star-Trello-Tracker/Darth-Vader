import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { EditProfilePageComponent } from './components/edit-profile-page/edit-profile-page.component';
import { FormsModule } from '@angular/forms';
import { UserInfoPageService } from './services/user-info-page.service';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    EditProfilePageComponent,
    NotFoundPageComponent,
  ],
  providers: [UserInfoPageService],
  imports: [CommonModule, UserRoutingModule, DashboardModule, FormsModule],
})
export class UserModule {}
