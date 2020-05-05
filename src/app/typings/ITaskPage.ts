import { IUser } from './IUser';

export interface ITaskPage {
  id: number;
  key: string;
  title: string;
  description: string;
  attachments?: any;
  comments: any[];
  creator: IUser;
  person?: IUser;
  observers: IUser[];
  needAnswer: IUser[];
  storyPoints?: number;
  agile?: any;
}
