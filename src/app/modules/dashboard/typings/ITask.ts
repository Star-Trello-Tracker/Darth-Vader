import { IUser } from './IUser';

export interface ITask {
  key: string;
  title: string;
  creator: IUser;
  person?: IUser;
  status: string;
  comment?: string;
  refresh: string;
  observer?: IUser[];
}
