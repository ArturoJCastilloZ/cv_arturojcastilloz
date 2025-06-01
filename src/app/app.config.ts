import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCER, metaReducers } from './state/states/app.state';
import { effectArray } from '@Effects/index';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomJwtInterceptor } from '@Helpers/custom.jwt.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideStore(ROOT_REDUCER, { metaReducers }),
        provideEffects(effectArray),
        provideHttpClient(withInterceptorsFromDi()),
        { provide: HTTP_INTERCEPTORS, useClass: CustomJwtInterceptor, multi: true },
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideRouter(routes),
    ]
};
