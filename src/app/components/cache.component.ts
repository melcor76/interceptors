import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="run()">Run</button>
    <button mat-raised-button color="primary" (click)="clear()">Clear</button>
  `
})
export class CacheComponent {
  response: Observable<any>;
  constructor(private http: HttpClient) {}

  run() {
    const url = "https://jsonplaceholder.typicode.com/todos/2";
    this.response = this.http.get(url);
  }

  clear() {
    this.response = null;
  }
}
