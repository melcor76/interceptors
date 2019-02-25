import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Profiler
    <button (click)="run()">Run</button>
  `
})
export class ProfilerComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.profiler).subscribe();
  }
}
