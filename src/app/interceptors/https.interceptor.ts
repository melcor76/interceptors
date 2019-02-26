import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Observable, of } from "rxjs";
import { paths } from "../const";

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.https) && !req.url.includes("todos")) {
      return next.handle(req);
    }

    // clone request and replace 'http://' with 'https://' at the same time
    const httpsReq = req.clone({
      url: req.url.replace("http://", "https://")
    });

    return next.handle(httpsReq);
  }
}
