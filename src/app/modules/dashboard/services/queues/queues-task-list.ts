import { ITask, IQueue } from '../../../../typings';
import { user } from '../user';

const queueTaskList: ITask[] = [
  {
    key: 'TASK-1',
    title: 'Сделать таблицу',
    creator: user,
    person: user,
    status: 'Решён',
    comment: 'Задача решена',
    refresh: '12 апр',
    observer: [],
  },
  {
    key: 'TASK-2',
    title: 'Сделать фильтр для таблицы',
    creator: user,
    status: 'В работе',
    refresh: '12 апр',
  },
  {
    key: 'TASK-3',
    title: 'Сделать сортировки по столбцам',
    creator: user,
    status: 'В работе',
    refresh: '12 апр',
  },
  {
    key: 'TASK-4',
    title: 'Добавить иконки статуса для задач',
    creator: user,
    status: 'Открыта',
    refresh: '12 апр',
  },
];

export const queue: IQueue = {
  id: 1,
  title: 'TASK',
  description: 'Очередь для задач в таком-то проекте',
  creator: user,
  taskList: queueTaskList,
  link: 'task',
};
