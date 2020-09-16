import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { EditProfilePageComponent } from './components/edit-profile-page/edit-profile-page.component';

const routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'profile/edit',
    component: EditProfilePageComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
