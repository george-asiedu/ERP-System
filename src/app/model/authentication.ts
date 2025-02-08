export interface Signup {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface Signin {
  email: string;
  password: string;
  rememberMe?: boolean;
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

export interface VerifyResetCode {
  verificationCode: string;
}

export interface SigninResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      email: string;
      name: string;
      role: string;
      isVerified: boolean;
      image: null;
    };
  }
}

export interface SignupResponse {
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      isVerified: boolean;
      image: null;
    },
    token: string;
  }
}

export interface AuthResponse {
  message: string;
}

export interface RefreshTokenResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  }
}

export enum Roles {
  Admin = 'Admin',
  Employee = 'Employee',
}
