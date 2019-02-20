import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth.component";
import { CacheComponent } from "./components/cache.component";
import { CamelComponent } from "./components/camel.component";
import { ToastrComponent } from "./components/toastr.component";
import { ErrorComponent } from "./components/error.component";
import { FakeComponent } from "./components/fake.component";
import { HeaderComponent } from "./components/header.component";
import { LoaderComponent } from "./components/loader.component";
import { ProfilerComponent } from "./components/profiler.component";
import { CommonModule } from "@angular/common";
import { HttpsComponent } from "./components/https.component";

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "cache", component: CacheComponent },
  { path: "camel", component: CamelComponent },
  { path: "error", component: ErrorComponent },
  { path: "fake", component: FakeComponent },
  { path: "header", component: HeaderComponent },
  { path: "https", component: HttpsComponent },
  { path: "loader", component: LoaderComponent },
  { path: "profiler", component: ProfilerComponent },
  { path: "toastr", component: ToastrComponent }
];

@NgModule({
  declarations: [
    AuthComponent,
    CacheComponent,
    CamelComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    HttpsComponent,
    LoaderComponent,
    ProfilerComponent,
    ToastrComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [
    AuthComponent,
    CacheComponent,
    CamelComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    HttpsComponent,
    LoaderComponent,
    ProfilerComponent,
    ToastrComponent,
    RouterModule
  ]
})
export class AppRoutingModule {}
