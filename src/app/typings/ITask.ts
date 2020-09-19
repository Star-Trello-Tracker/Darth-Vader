import { IUser } from './IUser';
import { TaskPriority, TaskStatus } from './ITaskPage';

export interface ITask {
  id: number;
  key: string;
  title: string;
  priority: any;
  creator: IUser;
  person?: IUser;
  assignee?: IUser;
  status: any;
  comment?: string;
  refresh: number;
  refreshed?: number;
  observer?: IUser[];
  observers?: IUser[];
}
