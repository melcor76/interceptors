import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { camelCase, mapKeys } from "lodash";
import { paths } from "../const";
import { map } from "rxjs/operators";

@Injectable()
export class ConvertInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("comments")) {
      return next.handle(req);
    }
    console.warn("ConvertInterceptor");

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
          const modEvent = event.clone({ body: camelCaseObject });

          return modEvent;
        }
      })
    );
  }
}
