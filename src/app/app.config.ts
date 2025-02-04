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
import {appStoreFeature} from './app-store/app.reducers';
import * as RouteEffects from './app-store/routes.effects';
import * as ToastEffects from './app-store/toast.effects';
import * as SpinnerEffects from './app-store/spinner.effects';

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
    provideState(appStoreFeature),
    provideEffects([AuthEffects, RouteEffects, ToastEffects, SpinnerEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
