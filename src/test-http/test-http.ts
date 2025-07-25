import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-http',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `test-http.html`,
  styleUrls: ['./test-http.scss']
})
export class TestHttpComponent {
  responses: any[] = [];

  constructor(private http: HttpClient) {}

  makeRequests() {
    this.responses = []; // reset avant
    const req1 = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    const req2 = this.http.get('https://jsonplaceholder.typicode.com/posts/2');
    const req3 = this.http.get('https://jsonplaceholder.typicode.com/posts/3');

    forkJoin([req1, req2, req3]).subscribe(results => {
      this.responses = results;
    });
  }
}
