import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'update',
})
export class UpdatePipe implements PipeTransform {
  transform(date: number): string {
    if (Date.now() - date < 3600000) {
      return moment(date).startOf('hour').fromNow();
    }
    return moment(date).format('D MMMM YYYY в HH:mm');
  }
}
