import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoaderComponentService } from '../../projects/squid-game-loader/src/lib/local/loader-component.service';
import { SquidGameLoaderLocal } from '../../projects/squid-game-loader/src/lib/local/squid-game-loader-local';

@Component({
  selector: 'app-test-http',
  standalone: true,
  imports: [CommonModule, SquidGameLoaderLocal],
  providers: [LoaderComponentService], // Pas de service local ici
  templateUrl: `test-http.html`,
  styleUrls: ['./test-http.scss']
})
export class TestHttpComponent {
  responses: any[] = [];

  constructor(private http: HttpClient, public loaderService: LoaderComponentService) {}

  makeRequests() {
    this.responses = []; // reset avant
    const req1 = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    const req2 = this.http.get('https://jsonplaceholder.typicode.com/posts/2');
    const req3 = this.http.get('https://jsonplaceholder.typicode.com/posts/3');

    forkJoin([req1, req2, req3]).subscribe(results => {
      this.responses = results;
    });
  }

    makeLocalRequest() {
    this.loaderService.show();
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe({
        next: (res) => console.log(res),
        complete: () => this.loaderService.hide()
      });
  }
}
