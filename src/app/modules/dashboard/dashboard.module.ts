import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardTasksListComponent } from './components/task-list/dashboard-tasks-list/dashboard-tasks-list.component';
import { DashboardTaskListHeaderComponent } from './components/task-list/dashboard-task-list-header/dashboard-task-list-header.component';
import { DashboardTaskListRowComponent } from './components/task-list/dashboard-task-list-row/dashboard-task-list-row.component';
import { DashboardTaskListService } from './services/dashboard-task-list.service';
import { MainPageModule } from '../main-page/main-page.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { BoardsComponent } from './components/menu/boards/boards.component';
import { QueuesComponent } from './components/menu/queues/queues.component';
import { SearchComponent } from './components/menu/search/search.component';
import { BoardComponent } from './components/menu/board/board.component';
import { BoardsService } from './services/boards.service';
import { FormsModule } from '@angular/forms';
import { QueueComponent } from './components/menu/queue/queue.component';
import { QueueListComponent } from './components/queue-list/queue-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DashboardTasksListComponent,
    DashboardTaskListHeaderComponent,
    DashboardTaskListRowComponent,
    MenuComponent,
    BoardsComponent,
    QueuesComponent,
    SearchComponent,
    BoardComponent,
    QueueComponent,
    QueueListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainPageModule,
    SharedModule,
    FormsModule,
  ],
  providers: [DashboardTaskListService, BoardsService],
})
export class DashboardModule {}
