import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";
import { paths } from "../const";
import { ProfilerService } from "../services/profiler.service";

@Injectable()
export class ProfilerInterceptor implements HttpInterceptor {
  constructor(private profiler: ProfilerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.profiler) && !req.url.includes("users")) {
      return next.handle(req);
    }

    const started = Date.now();

    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${
              req.urlWithParams
            }" succeeded in ${elapsed} ms.`;
            this.profiler.add(msg);
          }
        },
        // Operation failed; error is an HttpErrorResponse
        error => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${
            req.urlWithParams
          }" failed in ${elapsed} ms.`;
          this.profiler.add(msg);
        }
      )
    );
  }
}
