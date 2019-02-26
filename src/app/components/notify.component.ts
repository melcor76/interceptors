import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="run()">
      Create object
    </button>
  `
})
export class NotifyComponent {
  constructor(private http: HttpClient) {}

  run() {
    const body = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    this.http
      .post("https://jsonplaceholder.typicode.com/posts", body)
      .subscribe();
  }
}
