import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideSpinnerConfig} from 'ngx-spinner';
import { NgToastModule } from 'ng-angular-popup';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(), 
    provideHttpClient(withInterceptors([])), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideSpinnerConfig({type: 'ball-scale-pulse'}),
    importProvidersFrom(NgToastModule),
    provideRouter(routes), 
    provideStore(), 
    provideEffects(), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
