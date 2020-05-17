import { IUser } from './IUser';
import { TaskPriority, TaskStatus } from './ITaskPage';

export interface ITask {
  id: number;
  key: string;
  title: string;
  priority: TaskPriority;
  creator: IUser;
  person?: IUser;
  status: TaskStatus;
  comment?: string;
  refresh: number;
  observer?: IUser[];
}
