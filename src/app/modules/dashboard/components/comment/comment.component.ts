import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from '../../../../typings';
import { AuthService } from '../../../../auth-services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;
  @Input() config: any;

  @Output() editCommentEmitter = new EventEmitter();
  @Output() deleteComment = new EventEmitter();

  public isEdit = false;

  constructor(private authService: AuthService) {}

  public checkAbillityToEdit(id: number) {
    return parseInt(this.authService.getId(), 10) === id;
  }

  ngOnInit(): void {}

  public editComment() {
    this.isEdit = true;
  }

  public editCommentEmit(comment: IComment) {
    this.editCommentEmitter.emit(comment);
  }

  public delete() {
    this.deleteComment.emit(this.comment.id);
  }
}
