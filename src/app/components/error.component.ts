import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Error
    <button (click)="run()">Run</button>
  `
})
export class ErrorComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("error").subscribe();
  }
}
