import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Convert
    <button (click)="run()">Run</button>
  `
})
export class ConvertComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.convert).subscribe();
  }
}
