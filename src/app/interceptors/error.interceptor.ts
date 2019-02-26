import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { paths } from "../const";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.error)) {
      return next.handle(req);
    }
    console.warn("ErrorInterceptor");

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 508) {
          // Retry on network errors or timeouts
          retry(2);
        } else if (error.status !== 401) {
          // 401 handled in auth.interceptor
          this.toastr.error(error.message);
          return throwError(error);
        }
        return throwError(error);
      })
    );
  }
}
