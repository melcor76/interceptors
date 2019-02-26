import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { paths } from "../const";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.header)) {
      return next.handle(req);
    }
    console.warn("HeaderInterceptor");

    const modified = req.clone({ setHeaders: { "X-Man": "Wolverine" } });

    return next.handle(modified);
  }
}
