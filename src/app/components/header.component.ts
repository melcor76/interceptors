import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Header
    <button (click)="run()">Run</button>
  `
})
export class HeaderComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("header").subscribe();
  }
}
