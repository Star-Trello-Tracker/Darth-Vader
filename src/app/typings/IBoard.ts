import { IUser } from './IUser';

export interface IBoard {
  id: number;
  title: string;
  creator: IUser;
  link: string | number;
}
