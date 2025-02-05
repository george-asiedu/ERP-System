import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const authSelector = createFeatureSelector<AuthState>('Auth');

export const getAccessToken = (state: AuthState): string | null => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.accessToken;
  }
  return null;
};

export const getRefreshToken = (state: AuthState): string | null => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.refreshToken;
  }
  return null;
};

export const selectIsLoading = createSelector(
  authSelector,
  (state) => state.isLoading
);

export const selectError = createSelector(
  authSelector,
  (state) => state.error
);

export const selectAccessToken = createSelector(authSelector, getAccessToken);

export const selectRefreshToken = createSelector(authSelector, getRefreshToken);
