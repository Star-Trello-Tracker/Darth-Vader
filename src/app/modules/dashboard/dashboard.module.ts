import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardTasksListComponent } from './components/task-list/dashboard-tasks-list/dashboard-tasks-list.component';
import { DashboardTaskListHeaderComponent } from './components/task-list/dashboard-task-list-header/dashboard-task-list-header.component';
import { DashboardTaskListRowComponent } from './components/task-list/dashboard-task-list-row/dashboard-task-list-row.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DashboardTasksListComponent,
    DashboardTaskListHeaderComponent,
    DashboardTaskListRowComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
