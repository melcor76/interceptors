import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `
    Toastr
    <button (click)="run()">Run</button>
  `
})
export class ToastrComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get("toastr").subscribe();
  }
}
