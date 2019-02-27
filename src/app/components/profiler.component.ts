import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="succeed()">
      Succeed
    </button>
    <button mat-raised-button color="warn" (click)="fail()">Fail</button>
  `
})
export class ProfilerComponent {
  response: Observable<any>;

  constructor(private http: HttpClient) {}

  succeed() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    this.response = this.http.get(url);
  }

  fail() {
    this.response = this.http.get(paths.profiler);
  }
}
