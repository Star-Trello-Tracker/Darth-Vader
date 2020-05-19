import { user } from '../../../dashboard/services/user';
import { INotification } from '../../typings';

export const notifications: INotification[] = [
  {
    id: 1,
    user,
    task: 'TASK-1',
  },
  {
    id: 2,
    user,
    task: 'TASK-2',
  },
  {
    id: 3,
    user,
    task: 'TASK-3',
  },
  {
    id: 4,
    user,
    task: 'TASK-4',
  },
  {
    id: 5,
    user,
    task: 'BUG-1',
  },
  {
    id: 6,
    user,
    task: 'BUG-2',
  },
];
