export interface Signup {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface Login {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ResetPassword {
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPassword {
  email: string;
}

export interface TwoFactorAuth {
  twoFactorCode: string;
}

export interface VerifyEmail {
  verificationCode: string;
}

export interface RefreshToken {
  refreshToken: string;
}
