import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuth.value) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          `${this.authService.getToken()}`
        ),
      });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          console.log(true);
          localStorage.removeItem('id');
          localStorage.removeItem('isAuth');
          localStorage.removeItem('userName');
          localStorage.removeItem('token');
          this.authService.isAuth.next(false);
          this.authService.isNotAuth.next(true);

          this.router.navigateByUrl(`/`);
        }

        return throwError(err);
      })
    );
  }
}
