import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from '../../../../typings';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  @Input() config: any;
  @Output() createComment = new EventEmitter();
  @Output() editCommentEmitter = new EventEmitter();
  @Output() deleteComment = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public editCommentEmit(comment: IComment) {
    this.editCommentEmitter.emit(comment);
  }

  public newComment(comment: IComment) {
    this.createComment.emit(comment);
  }

  public delete(id: number) {
    this.deleteComment.emit(id);
  }
}
