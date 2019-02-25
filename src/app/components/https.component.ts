import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    HTTPS
    <button (click)="run()">Run</button>
  `
})
export class HttpsComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.https).subscribe();
  }
}
