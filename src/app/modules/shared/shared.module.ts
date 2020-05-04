import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { DashboardTaskListHeaderComponent } from './components/task-list/dashboard-task-list-header/dashboard-task-list-header.component';
import { DashboardTaskListRowComponent } from './components/task-list/dashboard-task-list-row/dashboard-task-list-row.component';
import { BoardComponent } from './components/board/board.component';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './components/queue/queue.component';

@NgModule({
  declarations: [
    ProfileLayoutComponent,
    DashboardTaskListHeaderComponent,
    DashboardTaskListRowComponent,
    BoardComponent,
    QueueComponent,
  ],
  exports: [
    ProfileLayoutComponent,
    DashboardTaskListRowComponent,
    DashboardTaskListHeaderComponent,
    BoardComponent,
    QueueComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
