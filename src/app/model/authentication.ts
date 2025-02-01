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
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPassword {
  email: string;
}

export interface TwoFactorAuth {
  twoFactorCode: string;
  email: string;
}

export interface VerifyEmail {
  verificationCode: string;
  email: string;
}

export interface RefreshToken {
  refreshToken: string;
}
