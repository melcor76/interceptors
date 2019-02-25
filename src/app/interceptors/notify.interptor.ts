import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { paths } from "../const";

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.notify) && !req.url.includes("posts")) {
      return next.handle(req);
    }

    console.log("NotifyInterceptor");

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          this.toastr.success("Object created.");
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error && error.status !== 401) {
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
