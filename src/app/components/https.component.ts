import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="run()">
      Call {{ url }}
    </button>
  `
})
export class HttpsComponent {
  url = "http://jsonplaceholder.typicode.com/todos/1";
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(this.url).subscribe();
  }
}
