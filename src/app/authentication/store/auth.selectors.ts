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

export const getUser = (state: AuthState) => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.user;
  }
  return null;
}

export const selectIsLoading = createSelector(
  authSelector,
  (state) => state.isLoading
);

export const selectAccessToken = createSelector(authSelector, getAccessToken);
export const selectRefreshToken = createSelector(authSelector, getRefreshToken);
export const selectUser = createSelector(authSelector, getUser);
