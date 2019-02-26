import { ProfilerService } from "./../services/profiler.service";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { paths } from "../const";
import { finalize } from "rxjs/operators";

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="succeed()">
      Succeed
    </button>
    <button mat-raised-button color="warn" (click)="fail()">Fail</button>
  `
})
export class ProfilerComponent {
  constructor(private http: HttpClient) {}

  succeed() {
    this.http.get("https://jsonplaceholder.typicode.com/users/1").subscribe();
  }

  fail() {
    this.http.get(paths.profiler).subscribe();
  }
}
