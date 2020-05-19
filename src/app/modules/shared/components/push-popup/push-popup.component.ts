import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotification } from '../../typings';

@Component({
  selector: 'app-push-popup',
  templateUrl: './push-popup.component.html',
  styleUrls: ['./push-popup.component.scss'],
})
export class PushPopupComponent implements OnInit {
  @Input() list: INotification[];
  @Output() delete = new EventEmitter();
  @Output() deleteAll = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public deleteNotification(id: number) {
    this.delete.emit(id);
  }

  deleteAllNotifications() {
    this.deleteAll.emit();
  }
}
