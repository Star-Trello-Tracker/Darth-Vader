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
import { BoardPageComponent } from './components/board-page/board-page.component';
import { CreateQueueComponent } from './components/create-queue/create-queue.component';
import { QueuesService } from './services/queues/queues.service';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { TaskPageService } from './services/task-page/task-page.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskService } from './services/create-task/create-task.service';
import { UserService } from './services/user/user.service';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CommentsService } from './services/comments/comments.service';
import { NgxMdModule } from 'ngx-md';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';

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
    CommentsListComponent,
    CommentComponent,
    CreateCommentComponent,
    CreateBoardComponent,
    BoardTaskComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainPageModule,
    SharedModule,
    FormsModule,
    NgxMdModule,
  ],
  providers: [
    TaskListService,
    BoardsService,
    QueuesService,
    TaskPageService,
    CreateTaskService,
    UserService,
    CommentsService,
  ],
})
export class DashboardModule {}
