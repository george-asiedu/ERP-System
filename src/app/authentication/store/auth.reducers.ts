import {AuthState} from './auth.state';
import {createFeature, createReducer, on} from '@ngrx/store';
import { authActions } from './auth.actions';

export const initialState: AuthState = {
  isLoading: false,
  error: null,
  data: null,
  message: null
};

export const authenticationFeature = createFeature({
  name: 'Auth',
  reducer: createReducer(
    initialState,
    on(authActions.signup, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.signin, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.forgotPassword, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.verifyResetCode, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.verifyTwoFactor, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.resetPassword, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.signupSuccess, (state, { data }) => ({
      ...state,
      isLoading: false,
      data: { type: 'signup' as const, response: data },
      error: null,
    })),
    on(authActions.signinSuccess, (state, { data }) => ({
      ...state,
      isLoading: false,
      data: { type: 'signin' as const, response: data },
      error: null,
    })),
    on(authActions.authenticationSuccess, (state, {message}) => ({
      ...state,
      isLoading: false,
      error: null,
      message
    })),
    on(authActions.authenticationFailure, (state, {error}) => ({
      ...state,
      isLoading: false,
      error
    })),
    on(authActions.logout, (state) => ({
      ...state,
      data: null,
    }))
  )
});
