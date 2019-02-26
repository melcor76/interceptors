import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  showLoader = false;

  constructor() {}

  show() {
    this.showLoader = true;
  }

  hide() {
    this.showLoader = false;
  }
}
