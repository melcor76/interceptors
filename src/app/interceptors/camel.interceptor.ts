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
export class CamelInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("camel")) {
      return next.handle(req);
    }
    console.log("CamelInterceptor");

    return next.handle(req).pipe(
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
