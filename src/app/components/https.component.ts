import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="request()">
      Request
    </button>
  `
})
export class HttpsComponent {
  response: Observable<any>;
  url = "http://jsonplaceholder.typicode.com/todos/1";
  constructor(private http: HttpClient) {}

  request() {
    this.response = this.http.get(this.url);
  }
}
