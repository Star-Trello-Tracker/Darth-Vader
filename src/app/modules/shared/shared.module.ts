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
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PushPopupComponent } from './components/push-popup/push-popup.component';
import { PushPopupItemComponent } from './components/push-popup-item/push-popup-item.component';
import { NotificationsService } from './services/notifications/notifications.service';

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
    NotificationsComponent,
    PushPopupComponent,
    PushPopupItemComponent,
  ],
  exports: [
    ProfileLayoutComponent,
    TaskListRowComponent,
    TaskListHeaderComponent,
    BoardComponent,
    QueueComponent,
    HeaderComponent,
    TaskListPageComponent,
    UpdatePipe,
  ],
  providers: [CommonService, NotificationsService],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
