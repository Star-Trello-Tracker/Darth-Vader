import { ITask } from './ITask';
import { IUser } from './IUser';

export interface IQueue {
  title: string;
  description: string;
  creator: IUser;
  taskList: ITask[];
}
