import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";
import { Observable } from "rxjs";

@Component({
  template: `
    <div>
      <h3>Request</h3>
      <pre>{{ requestObj | json }}</pre>
    </div>
    <div>
      <h3>Response</h3>
      <pre>{{ response | async | json }}</pre>
    </div>
    <button mat-raised-button color="primary" (click)="run()">
      Run
    </button>
  `
})
export class ConvertComponent {
  requestObj = {
    Title: "Mr",
    Name: "Cool Cat",
    Id: 1
  };
  response: Observable<any>;
  constructor(private http: HttpClient) {}

  run() {
    const url = "https://jsonplaceholder.typicode.com/comments/1";
    this.response = this.http.put(url, this.requestObj);
  }
}
