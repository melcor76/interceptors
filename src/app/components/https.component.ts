import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="request()">
      Run
    </button>
  `
})
export class HttpsComponent {
  response: Observable<any>;

  constructor(private http: HttpClient) {}

  request() {
    const url = "http://jsonplaceholder.typicode.com/todos/1";
    this.response = this.http.get(url);
  }
}
