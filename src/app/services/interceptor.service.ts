import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
import {AuthService} from './api/auth.service';
import {catchError, filter, map, switchMap, take, tap} from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  TOKEN_HEADER_KEY = 'Authorization';
  private isRefreshing = false;
  private refreshedTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let req = request;
    const token = this.tokenStorageService.getToken();

    if (token) {
      req = this.addTokenHeader(request, token);
    }

    return next.handle(req).pipe(
      filter(res => res instanceof HttpResponse),
      // خط زیر برای زمانی هست که مکانیزم رفرش توکن نداریم
      tap((res: HttpResponse<any>) => this.tokenStorageService.saveToken(res.headers.get('api-key'))),
      map((res: HttpResponse<any>) => res.clone({body: res.body})),
      catchError(error => {
        if (error instanceof HttpErrorResponse && !req.url.includes('api/account') && error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshedTokenSubject.next(null);
      const refreshToken = this.tokenStorageService.getRefreshToken();
      if (refreshToken) {
        return this.authService.refreshToken(refreshToken).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.tokenStorageService.saveToken(token.accessToken);
            // این جا باید بررسی بشه که آیا سرور رفرش جدید میده یا نه اگه نداد خط زیری باید حذف بشه چون فرض رو بر این میزاریم که رفرش قبلی معتبره
            this.tokenStorageService.saveRefreshToken(token.refreshToken);
            this.refreshedTokenSubject.next(token.accessToken);
            return next.handle(this.addTokenHeader(request, token.accessToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.tokenStorageService.signOut();
            return throwError(err);
          }),
        );
      }
      // اکشن لاگ اوت
    }
    return this.refreshedTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({headers: request.headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token)});
  }
}
