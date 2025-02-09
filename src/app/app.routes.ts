import { Routes } from '@angular/router';
import {authGuard} from './guard/auth.guard';
import { Roles } from './model/authentication';

export const routes: Routes = [
  { path: '',
    loadChildren: () => import('./authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  { path: 'congratulations',
    loadChildren: () => import('./shared/shared.module')
      .then(m => m.SharedModule),
    canActivate: [authGuard]
  },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    // canActivate: [authGuard],
    // data: { roles: [Roles.Admin] }
  },
];
