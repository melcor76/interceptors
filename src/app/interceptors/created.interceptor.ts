import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class CreatedInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("create")) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log("created");
        if (event instanceof HttpResponse && event.status === 201) {
          this.toastr.success("Object created.");
        }
      })
    );
  }
}
