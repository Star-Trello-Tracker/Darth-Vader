import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { DashboardTaskListHeaderComponent } from './components/task-list/dashboard-task-list-header/dashboard-task-list-header.component';
import { DashboardTaskListRowComponent } from './components/task-list/dashboard-task-list-row/dashboard-task-list-row.component';
import { BoardComponent } from './components/board/board.component';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './components/queue/queue.component';
import { HeaderComponent } from './components/header/header.component';
import { PriorityComponent } from './components/priority/priority.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    ProfileLayoutComponent,
    DashboardTaskListHeaderComponent,
    DashboardTaskListRowComponent,
    BoardComponent,
    QueueComponent,
    HeaderComponent,
    PriorityComponent,
  ],
  exports: [
    ProfileLayoutComponent,
    DashboardTaskListRowComponent,
    DashboardTaskListHeaderComponent,
    BoardComponent,
    QueueComponent,
    HeaderComponent,
  ],
  providers: [CommonService],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
