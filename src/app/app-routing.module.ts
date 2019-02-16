import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { CacheComponent } from "./cache/cache.component";
import { CamelComponent } from "./camel/camel.component";
import { RetryComponent } from "./retry/retry.component";
import { CreatedComponent } from "./created/created.component";
import { ErrorComponent } from "./error/error.component";
import { FakeComponent } from "./fake/fake.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderComponent } from "./loader/loader.component";
import { ProfilerComponent } from "./profiler/profiler.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "cache", component: CacheComponent },
  { path: "camel", component: CamelComponent },
  { path: "created", component: CreatedComponent },
  { path: "error", component: ErrorComponent },
  { path: "fake", component: FakeComponent },
  { path: "header", component: HeaderComponent },
  { path: "loader", component: LoaderComponent },
  { path: "profiler", component: ProfilerComponent },
  { path: "retry", component: RetryComponent }
];

@NgModule({
  declarations: [
    AuthComponent,
    CacheComponent,
    CamelComponent,
    CreatedComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    LoaderComponent,
    ProfilerComponent,
    RetryComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [
    AuthComponent,
    CacheComponent,
    CamelComponent,
    CreatedComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    LoaderComponent,
    ProfilerComponent,
    RetryComponent,
    RouterModule
  ]
})
export class AppRoutingModule {}
