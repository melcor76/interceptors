import { LoaderService } from "./loader.service";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  title = "interceptors";

  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  auth() {
    this.http.get("auth").subscribe();
  }

  cache() {
    this.http.get("cache").subscribe();
  }

  camel() {
    this.http.get("camel").subscribe();
  }

  create() {
    this.http.get("create").subscribe();
  }

  error() {
    this.http.get("error").subscribe();
  }

  fake() {
    this.http.get("fake").subscribe();
  }

  header() {
    this.http.get("header").subscribe();
  }

  loader() {
    this.http.get("loader").subscribe();
  }

  profile() {
    this.http.get("profiler").subscribe();
  }

  retry() {
    this.http.get("retry").subscribe();
  }
}
