import { IUser } from './IUser';
import { TaskPriority } from './ITaskPage';

export interface ITask {
  key: string;
  title: string;
  priority?: TaskPriority;
  creator: IUser;
  person?: IUser;
  status: string;
  comment?: string;
  refresh: string;
  observer?: IUser[];
}
