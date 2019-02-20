import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Camel
    <button (click)="run()">Run</button>
  `
})
export class CamelComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("camel").subscribe();
  }
}
