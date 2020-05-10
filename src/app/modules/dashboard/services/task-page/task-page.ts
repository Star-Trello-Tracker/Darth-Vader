import { ITaskPage } from '../../../../typings';
import { user } from '../user';

export const task: ITaskPage = {
  id: 1,
  key: 'TASK-1',
  title: 'Сделать таблицу',
  status: 6,
  priority: 2,
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
        distinctio, fugiat hic id ipsa, ipsum iste iure minima modi possimus
        quam reiciendis saepe ullam ut vel voluptas. Blanditiis consequuntur
        deleniti deserunt ducimus ea explicabo facere fugiat illo inventore,
        itaque, molestias mollitia neque non officia perspiciatis possimus qui
        quidem quos rem repellat reprehenderit sequi sit suscipit vitae
        voluptatibus? Alias, amet consectetur debitis dicta doloribus maiores
        molestias nobis officia perferendis porro, possimus provident qui quis
        quisquam, repellendus sapiente temporibus ullam voluptatum. Dolore,
        dolorum eveniet ex facere iure nihil nobis nostrum rem tenetur
        voluptate. Deleniti doloribus, eius hic odit officiis reprehenderit
        tenetur.`,
  comments: [],
  creator: user,
  person: user,
  observers: [user],
  needAnswer: [user],
  storyPoints: 10,
  agile: 'Спринт 7 (05.02 - 05.18)',
};
