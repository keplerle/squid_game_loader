import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SquidGameLoaderLocal } from '../../projects/squid-game-loader/src/lib/local/squid-game-loader-local';
import { LOCAL_LOADER } from '../../projects/squid-game-loader/src/lib/base/loader.token';
import { LoaderBaseService } from '../../projects/squid-game-loader/src/lib/base/loader-base.service';

@Component({
  selector: 'app-test-http',
  standalone: true,
  imports: [CommonModule, SquidGameLoaderLocal],
  providers: [    
    { provide: LOCAL_LOADER, useClass: LoaderBaseService }
  ],
  templateUrl: `test-http.html`,
  styleUrls: ['./test-http.scss']
})
export class TestHttpComponent {
  responses: any[] = [];

  constructor(
    private http: HttpClient,     
    @Inject(LOCAL_LOADER) public loaderService: LoaderBaseService
) {}

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
