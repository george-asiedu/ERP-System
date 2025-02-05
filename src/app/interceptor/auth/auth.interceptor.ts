import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectAccessToken} from '../../authentication/store/auth.selectors';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const appUrl: string = environment.productionUrl;
  const store = inject(Store);
  const token = store.selectSignal(selectAccessToken);
  const bearerUrls = [`${appUrl}auth/refresh-token`, `${appUrl}users/`];

  if (bearerUrls.some(url => req.url.startsWith(url))) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token()}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
