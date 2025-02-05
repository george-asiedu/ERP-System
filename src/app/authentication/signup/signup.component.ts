/* eslint-disable @angular-eslint/prefer-standalone */
import {Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from '../../validators/nameValidator';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { Signup } from '../../model/authentication';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {selectIsLoading} from '../store/auth.selectors';
import {authActions} from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private store = inject(Store<AuthState>);
  public signupForm: FormGroup;
  public showPassword = false;
  public isLoading = this.store.selectSignal(selectIsLoading);

  public constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    });
  }

  public onSignup() {
    if(this.signupForm.invalid) return;

    const user: Signup = this.signupForm.value;
    this.store.dispatch(authActions.signup({user}));
    this.signupForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signupForm.get(value);
  }
}
