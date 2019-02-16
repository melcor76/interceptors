import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { CacheInterceptor } from "./cache/cache.interceptor";
import { ErrorInterceptor } from "./error/error.interceptor";
import { RetryInterceptor } from "./retry/retry.interceptor";
import { HeaderInterceptor } from "./header/header.interceptor";
import { LoaderInterceptor } from "./loader/loader.interceptor";
import { CamelInterceptor } from "./camel/camel.interceptor";
import { CreatedInterceptor } from "./created/created.interceptor";
import { FakeInterceptor } from "./fake/fake.interceptor";
import { ProfilerInterceptor } from "./profiler/profiler.interceptor";

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
    { provide: HTTP_INTERCEPTORS, useClass: CamelInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CreatedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
