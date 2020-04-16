import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTasksListComponent } from './components/task-list/dashboard-tasks-list/dashboard-tasks-list.component';
import { MenuComponent } from './components/menu/menu.component';

const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardTasksListComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
