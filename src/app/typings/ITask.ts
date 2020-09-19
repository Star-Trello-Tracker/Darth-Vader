import { IUser } from './IUser';

export type TaskStatus =
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'NEED_INFO'
  | 'IN_REVIEW'
  | 'TESTING'
  | 'SOLVED'
  | 'CLOSED';
export type TaskPriority =
  | 'MINOR'
  | 'NORMAL'
  | 'HIGH'
  | 'BLOCKER'
  | 'BUG'
  | 'CRITICAL_BUG';

export interface ITask {
  /**
   * id задачи
   */
  id: number;

  /**
   * Ключ задачи
   */
  key: string;

  /**
   * Название задачи
   */
  title: string;

  /**
   * Описание задачи
   */
  description: string;

  /**
   * Приоритет задачи
   * 1 - minor
   * 2 - normal
   * 3 - high
   * 4 - blocker
   * 5 - bug
   * 6 - critical bug
   */
  priority: TaskPriority;

  /**
   * Создатель задачи
   */
  creator: IUser;

  /**
   * Исполнитель
   */
  assignee?: IUser;

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
   * Комментарии к задаче
   */
  comments?: any[];

  /**
   * Дата последнего обновления задачи
   */
  refreshed?: number;

  /**
   * Наблюдатели
   */
  observers?: IUser[];

  /**
   * Пользователи, которых призвали в комментариях
   */
  calledUsers?: IUser[];

  /**
   * Story points
   */
  storyPoints?: number;

  /**
   * Спринт
   */
  agile?: any;
}
