import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IComment } from '../../../../typings';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  public createComment(comment: IComment): Observable<IComment> {
    return this.httpClient.post<IComment>(
      `${environment.url}comment/create`,
      comment
    );
  }

  public editComment(data: any): Observable<IComment> {
    return this.httpClient.post<IComment>(
      `${environment.url}comment/${data.id}/edit`,
      data.data
    );
  }

  public deleteComment(id: number): Observable<any> {
    return this.httpClient.post<IComment>(
      `${environment.url}comment/${id}/delete`,
      {}
    );
  }
}
