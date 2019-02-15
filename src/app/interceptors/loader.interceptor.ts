import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes('loader')) {
      return next.handle(request);
    }

    const loaderService = this.injector.get(LoaderService);

    loaderService.show();

    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          loaderService.hide();
        }, 3000);
      })
    );
  }
}
