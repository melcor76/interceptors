import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Error
    <button (click)="run()">Run</button>
  `
})
export class ErrorComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.error).subscribe();
  }
}
