import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../loader.service';
import { paths } from '../const';

@Component({
  styleUrls: ['loader.component.css'],
  template: `
    Loader
    <button (click)="run()" [disabled]="loaderService.showLoader">Run</button>
    <div *ngIf="loaderService.showLoader" class="loader"></div>
  `
})
export class LoaderComponent {
  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  run() {
    this.http.get(paths.loader).subscribe();
  }
}
