import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";

@Component({
  template: `
    <button (click)="run()">Run</button>
  `
})
export class FakeComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.fake).subscribe();
  }
}
