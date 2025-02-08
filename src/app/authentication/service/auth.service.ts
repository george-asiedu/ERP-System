import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  AuthResponse,
  ForgotPassword,
  RefreshTokenResponse,
  ResetPassword, Signin, SigninResponse,
  Signup, SignupResponse,
  TwoFactorAuth,
  VerifyResetCode
} from '../../model/authentication';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {selectRefreshToken} from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl = `${environment.productionUrl}auth`;
  private store = Inject(Store<AuthState>);
  private token = this.store.selectSignal(selectRefreshToken);

  public constructor(private http: HttpClient) { }

  public signup(user: Signup) {
    return this.http.post<SignupResponse>(`${this.appUrl}/signup`, user);
  }

  public signin(user: Signin) {
    return this.http.post<SigninResponse>(`${this.appUrl}/signin`, user);
  }

  public twoFactorAuthentication(user: TwoFactorAuth, token: string) {
    return this.http.post<AuthResponse>(`${this.appUrl}/verify-account?token=${token}`, user);
  }

  public forgotPassword(user: ForgotPassword) {
    return this.http.post<AuthResponse>(`${this.appUrl}/forgot-password`, user);
  }

  public verifyResetCode(user: VerifyResetCode, token: string) {
    return this.http.post<AuthResponse>(`${this.appUrl}/verify-reset-code?token=${token}`, user);
  }

  public resetPassword(user: ResetPassword, token: string) {
    return this.http.post<AuthResponse>(`${this.appUrl}/reset-password?token=${token}`, user);
  }

  public refreshToken() {
    return this.http.post<RefreshTokenResponse>(
      `${this.appUrl}/refresh-token`,
      { refreshToken: this.token() }
    );
  }
}
