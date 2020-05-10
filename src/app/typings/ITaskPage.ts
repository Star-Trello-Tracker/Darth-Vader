import { IUser } from './IUser';

export type TaskStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ITaskPage {
  /**
   * id задачи
   */
  id: number;

  /**
   * Ключи задачи
   */
  key: string;

  /**
   * Название задачи
   */
  title: string;

  /**
   * Статус задачи: открыта, решена и тд
   * 1 - open
   * 2 - in progress
   * 3 - need info
   * 4 - in review
   * 5 - testing
   * 6 - solved
   * 7 - closed
   */
  status: TaskStatus;

  /**
   * Описание задачи
   */
  description: string;

  /**
   * Вложения (картинки)
   */
  attachments?: any;

  /**
   * Комментарии к задаче
   */
  comments: any[];

  /**
   * Создатель задачи
   */
  creator: IUser;

  /**
   * Исполнитель
   */
  person?: IUser;

  /**
   * Наблюдатели
   */
  observers: IUser[];

  /**
   * Нужен ответ от пользователя/пользователей
   */
  needAnswer: IUser[];

  /**
   * Story points
   */
  storyPoints?: number;

  /**
   * Спринт
   */
  agile?: any;
}
