import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private requestsInProgress = 0;
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loaderSubject.asObservable();
  private loaderStartTime: number | null = null;
  private minDisplayTime = 500; // en ms

  show() {
    this.requestsInProgress++;
    if (this.requestsInProgress === 1) {
      this.loaderStartTime = Date.now();
      this.loaderSubject.next(true);
    }
  }

  hide() {
    if (this.requestsInProgress > 0) {
      this.requestsInProgress--;
    }

    if (this.requestsInProgress === 0 && this.loaderStartTime) {
      const elapsed = Date.now() - this.loaderStartTime;
      const remaining = this.minDisplayTime - elapsed;

      if (remaining > 0) {
        setTimeout(() => {
          this.loaderSubject.next(false);
          this.loaderStartTime = null;
        }, remaining);
      } else {
        this.loaderSubject.next(false);
        this.loaderStartTime = null;
      }
    }
  }
}
