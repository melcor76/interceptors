import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth.component";
import { CacheComponent } from "./components/cache.component";
import { ConvertComponent } from "./components/convert.component";
import { NotifyComponent } from "./components/notify.component";
import { ErrorComponent } from "./components/error.component";
import { FakeComponent } from "./components/fake.component";
import { HeaderComponent } from "./components/header.component";
import { LoaderComponent } from "./components/loader.component";
import { ProfilerComponent } from "./components/profiler.component";
import { CommonModule } from "@angular/common";
import { HttpsComponent } from "./components/https.component";
import { paths } from "./const";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  { path: paths.auth, component: AuthComponent },
  { path: paths.cache, component: CacheComponent },
  { path: paths.convert, component: ConvertComponent },
  { path: paths.error, component: ErrorComponent },
  { path: paths.fake, component: FakeComponent },
  { path: paths.header, component: HeaderComponent },
  { path: paths.https, component: HttpsComponent },
  { path: paths.loader, component: LoaderComponent },
  { path: paths.profiler, component: ProfilerComponent },
  { path: paths.notify, component: NotifyComponent }
];

@NgModule({
  declarations: [
    AuthComponent,
    CacheComponent,
    ConvertComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    HttpsComponent,
    LoaderComponent,
    NotifyComponent,
    ProfilerComponent
  ],
  imports: [CommonModule, MatButtonModule, RouterModule.forRoot(routes)],
  exports: [
    AuthComponent,
    CacheComponent,
    ConvertComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    HttpsComponent,
    LoaderComponent,
    NotifyComponent,
    ProfilerComponent,
    RouterModule
  ]
})
export class AppRoutingModule {}
