import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { VerifyAccountComponent } from './verify-account/verify-account.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    VerifyAccountComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    NgxSpinnerModule,
    NgOptimizedImage
  ]
})
export class AuthenticationModule { }
