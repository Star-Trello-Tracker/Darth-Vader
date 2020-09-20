import { ITask, IUser } from './index';

export interface INotification {
  id: number;
  initiator: IUser;
  calledUser: IUser;
  task: ITask;
  type: string;
}
