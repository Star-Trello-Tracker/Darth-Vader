import { Injectable } from '@angular/core';

/**
 * Сервис с методами, которые могут понадобиться в любом месте проекта
 */
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  /**
   * Queue-N -> Queue
   */
  public getQueueByTaskKey(key: string) {
    return key.slice(0, key.indexOf('-'));
  }
}
