import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { EditProfilePageComponent } from './components/edit-profile-page/edit-profile-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

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
    path: 'page/404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: 'page/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
