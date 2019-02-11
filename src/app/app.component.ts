import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'interceptors';

  constructor(private http: HttpClient) {}

  callApi() {
    this.http.get('url').subscribe();
  }
}
