import { IUser } from './IUser';
import { ITask } from './ITask';

export interface IBoard {
  id: number;
  title: string;
  creator: IUser;
  tasks: ITask[];
}
