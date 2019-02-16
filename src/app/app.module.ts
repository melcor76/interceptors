import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CacheInterceptor } from "./interceptors/cache.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { RetryInterceptor } from "./interceptors/retry.interceptor";
import { HeaderInterceptor } from "./interceptors/header.interceptor";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";
import { CamelCaseInterceptor } from "./interceptors/camel-case.interceptor";
import { CreatedInterceptor } from "./interceptors/created.interceptor";
import { FakeBackendInterceptor } from "./interceptors/fake-backend.interceptor";
import { ProfilerInterceptor } from "./interceptors/profiler.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CamelCaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CreatedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
