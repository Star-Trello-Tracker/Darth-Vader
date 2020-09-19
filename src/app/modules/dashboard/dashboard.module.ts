import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTasksListComponent } from './components/dashboard-tasks-list/dashboard-tasks-list.component';
import { TaskListService } from './services/task-list/task-list.service';
import { MainPageModule } from '../main-page/main-page.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { QueuesListComponent } from './components/queues-list/queues-list.component';
import { SearchComponent } from './components/search/search.component';
import { BoardsService } from './services/boards/boards.service';
import { FormsModule } from '@angular/forms';
import { QueueTaskListComponent } from './components/queue-task-list/queue-task-list.component';
import { QueuesTaskListService } from './services/queues/queues-task-list.service';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { CreateQueueComponent } from './components/create-queue/create-queue.component';
import { QueuesService } from './services/queues/queues.service';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { TaskPageService } from './services/task-page/task-page.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskService } from './services/create-task/create-task.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTasksListComponent,
    MenuComponent,
    BoardsListComponent,
    QueuesListComponent,
    SearchComponent,
    QueueTaskListComponent,
    BoardPageComponent,
    CreateQueueComponent,
    TaskPageComponent,
    CreateTaskComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainPageModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
    TaskListService,
    BoardsService,
    QueuesTaskListService,
    QueuesService,
    TaskPageService,
    CreateTaskService,
    UserService,
  ],
})
export class DashboardModule {}
