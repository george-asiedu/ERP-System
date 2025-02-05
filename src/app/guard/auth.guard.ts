import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import {AuthState} from '../authentication/store/auth.state';
import { NgToastService } from 'ng-angular-popup';
import { constants } from '../utils/constants';
import {authActions} from '../authentication/store/auth.actions';
import {selectAccessToken} from '../authentication/store/auth.selectors';

const getDependencies = () => {
  return {
    store: inject(Store<AuthState>),
    toast: inject(NgToastService)
  };
};

const handleAuthorizedAccess = (store: Store<AuthState>, toast: NgToastService) => {
  toast.warning(
    constants.unauthorizedAccess,
    constants.accessDenied,
    constants.toastDuration
  );
  store.dispatch(authActions.logout());
};

const checkAuth = () => {
  const { store, toast } = getDependencies();
  const token = store.selectSignal(selectAccessToken);

  if (token()) {
    return true;
  } else {
    handleAuthorizedAccess(store, toast);
    return false;
  }
};

export const authGuard: CanActivateFn = () => {
  return checkAuth();
};
