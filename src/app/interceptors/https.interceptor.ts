import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { paths } from '../const';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.https)) {
      return next.handle(req);
    }
    console.log('HttpsInterceptor');

    // clone request and replace 'http://' with 'https://' at the same time
    const https = req.clone({
      url: req.url.replace('http://', 'https://')
    });

    return next.handle(https);
  }
}
