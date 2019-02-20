import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Fake
    <button (click)="run()">Run</button>
  `
})
export class FakeComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("fake").subscribe();
  }
}
