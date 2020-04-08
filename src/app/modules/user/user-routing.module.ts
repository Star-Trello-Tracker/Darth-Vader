import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
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
