import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    HTTPS
    <button (click)="run()">Run</button>
  `
})
export class HttpsComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("http://jsonplaceholder.typicode.com/posts/1").subscribe();
  }
}
