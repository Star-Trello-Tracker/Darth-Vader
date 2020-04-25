import { IQueue } from '../typings';
import { user } from './user';

export const queues: IQueue[] = [
  {
    id: 1,
    title: 'TASK',
    creator: user,
    link: 'task',
  },
  {
    id: 2,
    title: 'Очередь-2',
    creator: user,
    link: 'queue-2',
  },
  {
    id: 3,
    title: 'Очередь-3',
    creator: user,
    link: 'queue-3',
  },
  {
    id: 4,
    title: 'Очередь-4',
    creator: user,
    link: 'queue-4',
  },
  {
    id: 5,
    title: 'Очередь-5',
    creator: user,
    link: 'queue-5',
  },
  {
    id: 6,
    title: 'Очередь-6',
    creator: user,
    link: 'queue-6',
  },
  {
    id: 7,
    title: 'Очередь-7',
    creator: user,
    link: 'queue-7',
  },
];
