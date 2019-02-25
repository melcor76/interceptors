import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { camelCase, mapKeys } from 'lodash';
import { paths } from '../const';

@Injectable()
export class ConvertInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.convert)) {
      return next.handle(req);
    }
    console.log('ConvertInterceptor');

    return next.handle(req).pipe(
      map(obj => {
        let snakeCaseObject = { Test: 'test', AftenPpt: 23 };
        let camelCaseObject = mapKeys(snakeCaseObject, (v, k) => camelCase(k));
        console.log(snakeCaseObject);
        console.log(camelCaseObject);
        return camelCaseObject;
      })
    );
  }
}
