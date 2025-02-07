import { inject } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {authActions} from '../authentication/store/auth.actions';
import {tap} from 'rxjs';

export const signupRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.signupSuccess),
      tap(() => route.navigateByUrl('/verify-account'))
    );
  },
  { functional: true, dispatch: false }
);

export const verifyAccountRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.verifyAccountSuccess),
      tap(() => route.navigateByUrl(''))
    );
  },
  { functional: true, dispatch: false }
);

export const signinRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.signinSuccess),
      tap(() => route.navigateByUrl('/dashboard'))
    );
  },
  { functional: true, dispatch: false }
);

export const forgotPasswordRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.forgotPasswordSuccess),
      tap(() => route.navigateByUrl('/verify-reset-code'))
    );
  },
  { functional: true, dispatch: false }
);

export const verifyResetCodeRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.verifyResetCodeSuccess),
      tap(() => route.navigateByUrl('/reset-password'))
    );
  },
  { functional: true, dispatch: false }
);

export const resetPasswordRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.resetPasswordSuccess),
      tap(() => route.navigateByUrl('/congratulations'))
    );
  },
  { functional: true, dispatch: false }
);

export const logoutRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      tap(() => route.navigateByUrl(''))
    );
  },
  { functional: true, dispatch: false }
);
