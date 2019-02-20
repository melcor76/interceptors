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
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("header")) {
      return next.handle(req);
    }
    console.log("HeaderInterceptor");

    const modified = req.clone({ setHeaders: { "X-Man": "Wolverine" } });

    return next.handle(modified);
  }
}
