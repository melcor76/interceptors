import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  template: `
    <div style="display: flex;">
      <div class="flex: 50%">
        <h3>Request</h3>
        <pre>{{ requestObj | json }}</pre>
      </div>
      <div class="flex: 50%">
        <h3>Response</h3>
        <pre>{{ response | async | json }}</pre>
      </div>
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
