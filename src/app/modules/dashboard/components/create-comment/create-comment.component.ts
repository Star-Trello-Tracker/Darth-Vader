import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment, IUser } from '../../../../typings';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  @Input() config: any;
  @Input() commentForEdit: Partial<IComment> = {};
  @Input() isEdit = false;

  @Output() newComment = new EventEmitter();
  @Output() editComment = new EventEmitter();

  public createMode = false;
  public isPreview = false;

  public comment = '';
  public isSearch = false;

  public calledUsers = [];
  public allUsernames = [];
  public usernamesToShow = [];

  private searchUsername = '';

  public top = 0;
  public left = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.isEdit) {
      this.comment = this.commentForEdit.text;
      this.calledUsers = this.commentForEdit.whoCalled.map((el: IUser) => {
        return [el.username, el.name, el.surname];
      });
    }
    this.allUsernames = this.config.usernames.filter((el) => {
      return this.config.username !== el[0];
    });
    this.usernamesToShow = this.allUsernames;
  }

  public findUser(event: KeyboardEvent) {
    // @ts-ignore
    this.left = event.srcElement.offsetLeft;
    // @ts-ignore
    this.top = event.srcElement.offsetTop + 30;

    let key = event.key.toLowerCase();

    if (event.key === 'Escape' || key === ' ') {
      this.isSearch = false;
      this.searchUsername = '';
      return;
    }

    if (key.length > 1) {
      if (key === 'backspace') {
        if (this.searchUsername === '') {
          this.isSearch = false;
          return;
        }
        this.searchUsername = this.searchUsername.slice(
          0,
          this.searchUsername.length - 1
        );
        key = '';
      } else {
        return;
      }
    }

    if (key === '@') {
      this.isSearch = true;
    } else {
      this.searchUsername += key;
    }

    this.filterUsernames();
  }

  private filterUsernames() {
    if (this.searchUsername === '') {
      this.usernamesToShow = this.allUsernames;
      return;
    }

    this.usernamesToShow = this.allUsernames.filter((elem: string[]) => {
      return elem[0].startsWith(this.searchUsername);
    });
  }

  public callUser(username: string[], textArea: HTMLTextAreaElement) {
    if (!this.calledUsers.includes(username)) {
      this.calledUsers.push(username);
      this.usernamesToShow = this.usernamesToShow.filter((el) => {
        return !this.calledUsers.includes(el);
      });
    }
    const start = this.comment.split('@').pop();
    this.comment += username[0]
      .split('')
      .filter((el, index) => {
        return index > start.length - 1;
      })
      .join('');
    this.searchUsername = '';
    this.isSearch = false;
    textArea.focus();
  }

  public createComment() {
    const data = {
      taskKey: this.config.key,
      comment: this.comment,
      whoCalled: this.calledUsers.map((el) => el[0]),
    };

    if (this.isEdit) {
      this.editComment.emit({ id: this.commentForEdit.id, data });
    } else {
      this.newComment.emit(data);
    }
    this.cancel();
  }

  public cancel() {
    this.comment = '';
    this.isSearch = false;
    this.calledUsers = [];
    this.usernamesToShow = this.allUsernames;
    this.createMode = false;
  }

  public showCreateCommentForm() {
    this.createMode = true;
  }

  editToggle(isPreview: boolean) {
    this.isPreview = isPreview;
  }
}
