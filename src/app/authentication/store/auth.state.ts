import {AuthResponse, RefreshTokenResponse, SigninResponse, SignupResponse} from '../../model/authentication';

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  data: { type: 'signin'; response: SigninResponse } |
    { type: 'signup'; response: SignupResponse } |
    { type: 'refreshToken'; response: RefreshTokenResponse } | null;
  message: AuthResponse | null;
}
