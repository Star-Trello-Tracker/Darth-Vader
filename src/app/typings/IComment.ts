import { IUser } from './IUser';

export interface IComment {
  id: number;
  creator: IUser;
  text: string;
  whoCalled: IUser[];
  created: number;
  taskId: number;
}
