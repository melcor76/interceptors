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
    <div *ngFor="let log of logs">{{ log }}</div>
  `
})
export class ProfilerComponent {
  logs: string[] = [];
  constructor(private http: HttpClient, private profiler: ProfilerService) {
    this.logs = this.profiler.logs;
  }

  succeed() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users/1")
      .pipe(
        finalize(() => {
          this.logs = this.profiler.logs;
        })
      )
      .subscribe();
  }

  fail() {
    this.http
      .get(paths.profiler)
      .pipe(
        finalize(() => {
          this.logs = this.profiler.logs;
        })
      )
      .subscribe();
  }
}
