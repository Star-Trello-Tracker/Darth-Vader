import { IUser } from '../../../typings';

export interface INotification {
  id: number;
  user: IUser;
  task: string;
}
