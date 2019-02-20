import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ToastrInterceptor } from "./toastr.interptor";
import { HttpsInterceptor } from "./https.interceptor";
import { ProfilerInterceptor } from "./profiler.interceptor";
import { AuthInterceptor } from "./auth.interceptor";
import { CacheInterceptor } from "./cache.interceptor";
import { HeaderInterceptor } from "./header.interceptor";
import { ErrorInterceptor } from "./error.interceptor";
import { FakeInterceptor } from "./fake.interceptor";
import { LoaderInterceptor } from "./loader.interceptor";
import { CamelInterceptor } from "./camel.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CamelInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ToastrInterceptor, multi: true }
];
