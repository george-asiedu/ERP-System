import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideSpinnerConfig} from 'ngx-spinner';
import { NgToastModule } from 'ng-angular-popup';
import * as AuthEffects from './authentication/store/auth.effects';
import {authenticationFeature} from './authentication/store/auth.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideSpinnerConfig({type: 'ball-scale-pulse'}),
    importProvidersFrom(NgToastModule),
    provideRouter(routes),
    provideStore(),
    provideState(authenticationFeature),
    provideEffects([AuthEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
