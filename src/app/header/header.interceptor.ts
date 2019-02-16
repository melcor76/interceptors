import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("header")) {
      return next.handle(request);
    }
    console.log("HeaderInterceptor");

    const modified = request.clone({ setHeaders: { "X-Man": "Wolverine" } });

    return next.handle(modified);
  }
}
