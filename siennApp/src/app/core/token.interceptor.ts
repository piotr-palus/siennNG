import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthGuard} from '../guards/auth.guard';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthGuard) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.auth.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${token}`
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }

    request = request.clone({
      setHeaders: {
        Accept: 'application/json'
      }
    });


    return next.handle(request);
  }
}
