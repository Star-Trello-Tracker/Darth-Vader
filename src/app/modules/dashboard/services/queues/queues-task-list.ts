import { ITask, IQueue } from '../../../../typings';
import { user } from '../user';

const queueTaskList: ITask[] = [
  {
    id: 1,
    key: 'TASK-1',
    title: 'Сделать таблицу',
    priority: 1,
    creator: user,
    person: user,
    status: 'Решён',
    comment: 'Задача решена',
    refresh: '12 апр',
    observer: [],
  },
  {
    id: 2,
    key: 'TASK-2',
    title: 'Сделать фильтр для таблицы',
    priority: 2,
    creator: user,
    person: user,
    status: 'Решён',
    comment: 'Задача решена',
    refresh: '12 апр',
    observer: [],
  },
  {
    id: 3,
    key: 'TASK-3',
    title: 'Сделать сортировки по столбцам',
    priority: 3,
    creator: user,
    person: user,
    status: 'В работе',
    refresh: '12 апр',
    observer: [],
  },
  {
    id: 4,
    key: 'TASK-4',
    title: 'Добавить иконки статуса для задач',
    priority: 4,
    creator: user,
    status: 'Открыта',
    refresh: '12 апр',
    observer: [],
  },
];

export const queue: IQueue = {
  id: 1,
  title: 'TASK',
  description: 'Очередь для задач в проекте Darth-Vader',
  creator: user,
  taskList: queueTaskList,
  link: 'task',
};
