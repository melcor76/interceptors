import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "../loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("loader")) {
      return next.handle(req);
    }
    console.log("LoaderInterceptor");

    const loaderService = this.injector.get(LoaderService);

    loaderService.show();

    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          loaderService.hide();
        }, 3000);
      })
    );
  }
}
