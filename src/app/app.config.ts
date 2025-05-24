import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCER, metaReducers } from './state/states/app.state';
import { effectArray } from '@Effects/index';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects(effectArray),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore(ROOT_REDUCER, { metaReducers }),
    provideHttpClient(),
  ]
};
