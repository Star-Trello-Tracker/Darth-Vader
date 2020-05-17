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
    status: 6,
    comment: 'Задача решена',
    refresh: 1589026291315,
    observer: [],
  },
  {
    id: 2,
    key: 'TASK-2',
    title: 'Сделать фильтр для таблицы',
    priority: 2,
    creator: user,
    person: user,
    status: 6,
    comment: 'Задача решена',
    refresh: 1589126291315,
    observer: [],
  },
  {
    id: 3,
    key: 'TASK-3',
    title: 'Сделать сортировки по столбцам',
    priority: 3,
    creator: user,
    person: user,
    status: 6,
    comment: 'Задача решена',
    refresh: 1589621091315,
    observer: [],
  },
  {
    id: 4,
    key: 'TASK-4',
    title: 'Добавить иконки статуса для задач',
    priority: 4,
    creator: user,
    status: 6,
    comment: 'Задача решена',
    refresh: 1589721091315,
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
