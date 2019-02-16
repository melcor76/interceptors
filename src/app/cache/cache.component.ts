import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    <button (click)="run()">Run</button>
  `
})
export class CacheComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("cache").subscribe();
  }
}
