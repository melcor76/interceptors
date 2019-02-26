import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoaderService } from "../services/loader.service";
import { paths } from "../const";

@Component({
  styleUrls: ["loader.component.css"],
  template: `
    <button
      mat-raised-button
      color="primary"
      (click)="run()"
      [disabled]="loaderService.showLoader"
    >
      Run
    </button>
    <div *ngIf="loaderService.showLoader" class="loader"></div>
  `
})
export class LoaderComponent {
  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  run() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe();
  }
}
