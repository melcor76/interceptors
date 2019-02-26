import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProfilerService {
  logs: string[] = [];

  constructor() {}

  add(log: string) {
    console.log("add in service");
    this.logs = this.logs.concat(log);
  }

  reset() {
    this.logs = Object.assign(this.logs, []);
  }
}
