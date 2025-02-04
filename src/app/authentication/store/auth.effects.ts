import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../service/auth.service';
import { authActions } from './auth.actions';
import {mapResponse} from '@ngrx/operators';
import {filter, switchMap, withLatestFrom} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthState} from './auth.state';
import {selectAccessToken} from './auth.selectors';

export const signupEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.signup),
      switchMap(({user}) =>
        authService.signup(user).pipe(
          mapResponse({
            next: (response) => authActions.signupSuccess({data: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);

export const signinEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.signin),
      switchMap(({user}) =>
        authService.signin(user).pipe(
          mapResponse({
            next: (response) => authActions.signinSuccess({data: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);

export const twoFactorAuthEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    store = inject(Store<AuthState>)
  ) => {
    return actions$.pipe(
      ofType(authActions.verifyAccount),
      withLatestFrom(store.select(selectAccessToken)),
      filter(([, token]) => !!token),
      switchMap(([{twoFactorCode}, token]) =>
        authService.twoFactorAuthentication(twoFactorCode, token as string).pipe(
          mapResponse({
            next: (response) => authActions.verifyAccountSuccess({message: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);

export const forgotPasswordEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.forgotPassword),
      switchMap(({user}) =>
        authService.forgotPassword(user).pipe(
          mapResponse({
            next: (response) => authActions.forgotPasswordSuccess({message: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);

export const verifyResetCodeEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    store = inject(Store<AuthState>)
  ) => {
    return actions$.pipe(
      ofType(authActions.verifyResetCode),
      withLatestFrom(store.select(selectAccessToken)),
      filter(([, token]) => !!token),
      switchMap(([{verificationCode}, token]) =>
        authService.verifyResetCode(verificationCode, token as string).pipe(
          mapResponse({
            next: (response) => authActions.verifyResetCodeSuccess({message: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);

export const resetPasswordEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    store = inject(Store<AuthState>)
  ) => {
    return actions$.pipe(
      ofType(authActions.resetPassword),
      withLatestFrom(store.select(selectAccessToken)),
      filter(([, token]) => !!token),
      switchMap(([{user}, token]) =>
        authService.resetPassword(user, token as string).pipe(
          mapResponse({
            next: (response) => authActions.resetPasswordSuccess({message: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true }
);
