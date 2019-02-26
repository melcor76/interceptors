import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="run()">Run</button>
    <br />Send PascalCase
    <pre>{{ obj | json }}</pre>
    Returne camelCase
    <pre>{{ convertedObj | json }}</pre>
  `
})
export class ConvertComponent {
  obj = {
    Title: "Mr",
    Name: "Cool Cat"
  };
  convertedObj = {};
  constructor(private http: HttpClient) {}

  run() {
    this.http
      .put("https://jsonplaceholder.typicode.com/comments/1", this.obj)
      .subscribe(response => (this.convertedObj = response));
  }
}
