import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";
import {Router} from '@angular/router';
import {LOCAL_STORAGE_KEYS} from "../enums/configuration";

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let params = req.params;
    const userJson = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
    const auth = userJson !== null ? JSON.parse(userJson) : null;
    let headers = req.headers;
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH) && !req.headers.get("skip")) {
      headers = req.headers.append('Authorization', `Bearer ${auth.token}`);
    }
    const authReq = req.clone({
      headers: headers,
      params: params,
    });

    // by pass token
    if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({headers}));
    }

    // add token
    return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      //err.status === 0 ||
      if (err instanceof HttpErrorResponse && (err.status === 401)) {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
        localStorage.removeItem('google_experiment_mod');
        this.router.navigateByUrl('/user/login');
      } else if (err.status === 0) {
        // unknown response from server
      } else {
        // this.router.navigateByUrl('/error/server/' + err.status);
      }
    }));
  }
}
