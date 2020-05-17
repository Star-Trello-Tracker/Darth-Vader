import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { TaskListHeaderComponent } from './components/task-list/task-list-header/task-list-header.component';
import { TaskListRowComponent } from './components/task-list/task-list-row/task-list-row.component';
import { BoardComponent } from './components/board/board.component';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './components/queue/queue.component';
import { HeaderComponent } from './components/header/header.component';
import { PriorityComponent } from './components/priority/priority.component';
import { CommonService } from './services/common.service';
import { TaskListPageComponent } from './components/task-list/task-list-page/task-list-page.component';
import { UpdatePipe } from './pipes/update.pipe';

@NgModule({
  declarations: [
    ProfileLayoutComponent,
    TaskListHeaderComponent,
    TaskListRowComponent,
    BoardComponent,
    QueueComponent,
    HeaderComponent,
    PriorityComponent,
    TaskListPageComponent,
    UpdatePipe,
  ],
  exports: [
    ProfileLayoutComponent,
    TaskListRowComponent,
    TaskListHeaderComponent,
    BoardComponent,
    QueueComponent,
    HeaderComponent,
    TaskListPageComponent,
  ],
  providers: [CommonService],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
