import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Profiler
    <button (click)="run()">Run</button>
  `
})
export class ProfilerComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("profiler").subscribe();
  }
}
