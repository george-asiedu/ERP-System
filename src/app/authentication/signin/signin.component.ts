/* eslint-disable @angular-eslint/prefer-standalone */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  public signinForm: FormGroup;
  public showPassword = false;

  public constructor(private fb:FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    });
  }

  public onSignin() {
    if(this.signinForm.invalid) return;

    // const user: Signup = this.signupForm.value;
    this.signinForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signinForm.get(value);
  }
}
