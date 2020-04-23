import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTasksListComponent } from './components/task-list/dashboard-tasks-list/dashboard-tasks-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { QueuesComponent } from './components/menu/queues/queues.component';
import { SearchComponent } from './components/menu/search/search.component';
import { BoardsComponent } from './components/menu/boards/boards.component';
import { QueueListComponent } from './components/queue-list/queue-list.component';
import { BoardPageComponent } from './components/board-page/board-page.component';

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
        children: [
          {
            path: 'boards',
            component: BoardsComponent,
          },
          {
            path: 'queues',
            component: QueuesComponent,
          },
          {
            path: 'tasks',
            component: DashboardTasksListComponent,
          },
          {
            path: 'queues',
            component: SearchComponent,
          },
          {
            path: '',
            redirectTo: 'boards',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'board/:id',
        component: BoardPageComponent,
      },
      {
        path: ':queueId',
        component: QueueListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
