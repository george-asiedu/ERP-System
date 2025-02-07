import { Routes } from '@angular/router';
import {authGuard} from './guard/auth.guard';

export const routes: Routes = [
  { path: '',
    loadChildren: () => import('./authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  { path: 'congratulations',
    loadChildren: () => import('./shared/shared.module')
      .then(m => m.SharedModule),
    canActivate: [authGuard]
  }
];
