import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'interceptors';

  constructor(private http: HttpClient) {}

  auth() {
    this.http.get('auth').subscribe();
  }

  cache() {
    this.http.get('cache').subscribe();
  }

  error() {
    this.http.get('error').subscribe();
  }

  header() {
    this.http.get('header').subscribe();
  }

  retry() {
    this.http.get('retry').subscribe();
  }
}
