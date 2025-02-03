/* eslint-disable @angular-eslint/prefer-standalone */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Signup } from '../../model/authentication';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  public signupForm: FormGroup;
  public showPassword = false;

  public constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSignup() {
    if(this.signupForm.invalid) return;

    // const user: Signup = this.signupForm.value;
    this.signupForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signupForm.get(value);
  }
}
