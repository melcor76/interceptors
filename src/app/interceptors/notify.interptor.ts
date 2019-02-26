import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { paths } from "../const";

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("posts")) {
      return next.handle(req);
    }
    console.warn("NotifyInterceptor");

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          this.toastr.success("Object created.");
        }
      })
    );
  }
}
