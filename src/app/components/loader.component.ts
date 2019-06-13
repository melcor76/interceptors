import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoaderService } from "../services/loader.service";

@Component({
  styleUrls: ["loader.component.css"],
  template: `
    <div>
      <button
        mat-raised-button
        color="primary"
        (click)="run()"
        [disabled]="loaderService.showLoader"
      >
        Run
      </button>
      <div>
        <h3>Response</h3>
        <pre>{{ response | json }}</pre>
        <div *ngIf="loaderService.showLoader" class="loader"></div>
      </div>
    </div>
  `
})
export class LoaderComponent {
  response;

  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  run() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    this.http.get(url).subscribe(r => (this.response = r));
  }
}
