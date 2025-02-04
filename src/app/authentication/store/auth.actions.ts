import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {
  AuthResponse,
  ForgotPassword,
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
    'VerifyTwoFactor': props<{ twoFactorCode: TwoFactorAuth }>(),
    'ForgotPassword': props<{ user: ForgotPassword }>(),
    'VerifyResetCode': props<{ verificationCode: VerifyResetCode }>(),
    'ResetPassword': props<{ user: ResetPassword }>(),
    'Signup Success': props<{ data: SignupResponse }>(),
    'Signin Success': props<{ data: SigninResponse }>(),
    'Authentication Success': props<{ message: AuthResponse }>(),
    'Authentication Failure': props<{ error: string }>(),
    'Logout': emptyProps()
  }
});
