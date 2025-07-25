import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpInterceptorFn, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderBaseService } from '../../projects/squid-game-loader/src/lib/base/loader-base.service';
import { GLOBAL_LOADER } from '../../projects/squid-game-loader/src/lib/base/loader.token';

export const loaderInterceptorFn: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(GLOBAL_LOADER);
  loaderService.show();

  return next(req).pipe(
    finalize(() => loaderService.hide())
  );
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([loaderInterceptorFn])
    ),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
        { provide: GLOBAL_LOADER, useClass: LoaderBaseService }

  ]
};
