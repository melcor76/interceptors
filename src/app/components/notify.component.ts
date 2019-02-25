import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="run()">
      Create object
    </button>
    <button mat-raised-button color="warn" (click)="runError()">
      Error response
    </button>
  `
})
export class NotifyComponent {
  constructor(private http: HttpClient) {}

  run() {
    //this.http.get(paths.notify).subscribe();
    const body = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    this.http
      .post("https://jsonplaceholder.typicode.com/posts", body)
      .subscribe();
  }

  runError() {
    this.http.get(paths.notify).subscribe();
  }
}
