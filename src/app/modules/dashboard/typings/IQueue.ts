import { ITask } from './ITask';
import { IUser } from './IUser';

export interface IQueue {
  id?: number;
  title: string;
  description?: string;
  creator: IUser;
  taskList?: ITask[];
  link: string;
}
