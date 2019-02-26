import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProfilerService {
  add(log: string) {
    console.log(log);
  }
}
