import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {
  AuthResponse,
  ForgotPassword, RefreshTokenResponse,
  ResetPassword, Signin, SigninResponse,
  Signup,
  SignupResponse,
  TwoFactorAuth, VerifyResetCode
} from '../../model/authentication';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Signup': props<{ user: Signup }>(),
    'Signin': props<{ user: Signin }>(),
    'Verify Account': props<{ twoFactorCode: TwoFactorAuth }>(),
    'Forgot Password': props<{ user: ForgotPassword }>(),
    'Verify Reset Code': props<{ verificationCode: VerifyResetCode }>(),
    'Reset Password': props<{ user: ResetPassword }>(),
    'Signup Success': props<{ data: SignupResponse }>(),
    'Signin Success': props<{ data: SigninResponse }>(),
    'Verify Account Success': props<{ message: AuthResponse }>(),
    'Forgot Password Success': props<{ message: AuthResponse }>(),
    'Verify Reset Code Success': props<{ message: AuthResponse }>(),
    'Reset Password Success': props<{ message: AuthResponse }>(),
    'RefreshToken Success': props<{ data: RefreshTokenResponse }>(),
    'Authentication Failure': props<{ error: string }>(),
    'Logout': emptyProps()
  }
});
