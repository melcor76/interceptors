import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { camelCase, mapKeys } from "lodash";

@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("camel")) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      map(obj => {
        let snakeCaseObject = { Test: "test", AftenPpt: 23 };
        let camelCaseObject = mapKeys(snakeCaseObject, (v, k) => camelCase(k));
        console.log(snakeCaseObject);
        console.log(camelCaseObject);
        return camelCaseObject;
      })
    );
  }
}
