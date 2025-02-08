import { inject } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn} from '@angular/router';
import { Store } from '@ngrx/store';
import {AuthState} from '../authentication/store/auth.state';
import { NgToastService } from 'ng-angular-popup';
import { constants } from '../utils/constants';
import {authActions} from '../authentication/store/auth.actions';
import {selectAccessToken, selectUser} from '../authentication/store/auth.selectors';
import {Roles} from '../model/authentication';

const getDependencies = () => {
  return {
    store: inject(Store<AuthState>),
    toast: inject(NgToastService)
  };
};

const handleUnauthorizedAccess = (store: Store<AuthState>, toast: NgToastService) => {
  toast.warning(
    constants.unauthorizedAccess,
    constants.accessDenied,
    constants.toastDuration
  );
  store.dispatch(authActions.logout());
};

const checkAuth = (route: ActivatedRouteSnapshot) => {
  const { store, toast } = getDependencies();
  const token = store.selectSignal(selectAccessToken);
  const user = store.selectSignal(selectUser);
  const requiredRoles: Roles[] = route.data['roles'] ?? [];
  const userRole: Roles | undefined = user()?.role as Roles | undefined;

  if (!token() || !user()) {
    handleUnauthorizedAccess(store, toast);
    return false;
  }

  if (requiredRoles.length > 0 && (!userRole || !requiredRoles.includes(userRole))) {
    handleUnauthorizedAccess(store, toast);
    return false;
  }

  return true;
};

export const authGuard: CanActivateFn = (route) => {
  return checkAuth(route);
};
