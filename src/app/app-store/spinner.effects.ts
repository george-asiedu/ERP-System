import { inject } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import {authActions} from '../authentication/store/auth.actions';
import { tap } from 'rxjs';

export const showSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(
        authActions.signin, authActions.signin, authActions.verifyAccount,
        authActions.forgotPassword, authActions.resetPassword, authActions.verifyResetCode
      ),
      tap(() => spinner.show())
    );
  },
  { functional: true, dispatch: false }
);

export const hideSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(
        authActions.signinSuccess, authActions.verifyResetCodeSuccess,
        authActions.signupSuccess, authActions.resetPasswordSuccess,
        authActions.authenticationFailure, authActions.verifyAccountSuccess,
        authActions.forgotPasswordSuccess
      ),
      tap(() => spinner.hide())
    );
  },
  { functional: true, dispatch: false }
);
