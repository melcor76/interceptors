import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="run()">
      Create object
    </button>
  `
})
export class NotifyComponent {
  response: Observable<any>;

  constructor(private http: HttpClient) {}

  run() {
    const body = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    const url = "https://jsonplaceholder.typicode.com/posts";
    this.response = this.http.post(url, body);
  }
}
