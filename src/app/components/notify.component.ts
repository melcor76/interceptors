import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Notify
    <button (click)="run()">Run</button>
  `
})
export class NotifyComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.notify).subscribe();
  }
}
