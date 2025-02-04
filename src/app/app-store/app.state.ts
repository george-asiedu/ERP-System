import {SigninResponse} from '../model/authentication';

export interface AppStoreState {
  isLoading: boolean;
  error: string | null;
  userData: SigninResponse | null;
}
