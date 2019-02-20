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

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("error") || !req.url.includes("retry")) {
      return next.handle(req);
    }
    console.log("ErrorInterceptor");

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 508) {
          // Retry on network errors or timeouts
          retry(2);
        } else if (error.status !== 401) {
          // 401 handled in auth.interceptor
          this.toastr.error(error.message);
          return throwError(error);
        } else {
          return throwError(error);
        }
      })
    );
  }
}
