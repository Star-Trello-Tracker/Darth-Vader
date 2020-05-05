import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTasksListComponent } from './components/dashboard-tasks-list/dashboard-tasks-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { QueuesListComponent } from './components/queues-list/queues-list.component';
import { SearchComponent } from './components/search/search.component';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { QueueTaskListComponent } from './components/queue-task-list/queue-task-list.component';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { CreateQueueComponent } from './components/create-queue/create-queue.component';

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
            component: BoardsListComponent,
          },
          {
            path: 'queues',
            component: QueuesListComponent,
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
        path: 'create-queue',
        component: CreateQueueComponent,
      },
      {
        path: 'board/:id',
        component: BoardPageComponent,
      },
      {
        path: ':queueId',
        component: QueueTaskListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
