export interface ITask {
  key: string;
  title: string;
  creator: string;
  person: string;
  status: string;
  comment?: string;
  refresh: string;
}

export const data: ITask[] = [
  {
    key: 'TASK-1',
    title: 'Сделать таблицу',
    creator: 'Авдеев Иван',
    person: 'Авдеев Иван',
    status: 'Решён',
    comment: 'Задача решена',
    refresh: '12 апр',
  },
  {
    key: 'TASK-2',
    title: 'Сделать фильтр для таблицы',
    creator: 'Авдеев Иван',
    person: 'Авдеев Иван',
    status: 'В работе',
    refresh: '12 апр',
  },
  {
    key: 'TASK-3',
    title: 'Сделать сортировки по столбцам',
    creator: 'Авдеев Иван',
    person: 'Авдеев Иван',
    status: 'В работе',
    refresh: '12 апр',
  },
  {
    key: 'TASK-4',
    title: 'Добавить иконки статуса для задач',
    creator: 'Авдеев Иван',
    person: 'Авдеев Иван',
    status: 'В работе',
    refresh: '12 апр',
  },
];
