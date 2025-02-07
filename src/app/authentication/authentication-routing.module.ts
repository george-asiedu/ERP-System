import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {VerifyAccountComponent} from './verify-account/verify-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: SigninComponent, title: 'ERP System | Sign in' },
  { path: 'signup', component: SignupComponent, title: 'ERP System | Signup' },
  { path: 'verify-account', component: VerifyAccountComponent, title: 'ERP System | Verify Account' },
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'ERP System | Forgot Password' },
  { path: 'reset-password', component: ResetPasswordComponent, title: 'ERP System | Reset Password' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
